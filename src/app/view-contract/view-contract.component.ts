import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.css']
})
export class ViewContractComponent implements OnInit {

  contract: any;

  lifecycle = ['created', 'approved', 'sent', 'signed', 'locked'];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const contracts = JSON.parse(localStorage.getItem('contracts') || '[]');

    this.contract = contracts.find((c: any) => c.id == id);

    if (!this.contract) {
      this.router.navigate(['/contracts']);
    }
  }

  getCurrentIndex(): number {
    return this.lifecycle.indexOf(this.contract.status);
  }

  approve(): void {
    const index = this.getCurrentIndex();
    if (index < this.lifecycle.length - 1) {
      this.contract.status = this.lifecycle[index + 1];
      this.updateContract();
    }
  }

  revoke(): void {
    this.contract.status = 'created';
    this.updateContract();
  }

  updateContract(): void {
    const contracts = JSON.parse(localStorage.getItem('contracts') || '[]');
    const index = contracts.findIndex((c: any) => c.id === this.contract.id);
    contracts[index] = this.contract;
    localStorage.setItem('contracts', JSON.stringify(contracts));
  }
}
