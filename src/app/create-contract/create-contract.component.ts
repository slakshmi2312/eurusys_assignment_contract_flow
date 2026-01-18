import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {

  selectedBlueprintId: string = '';
  contractName: string = '';

  blueprints = [
    { id: '1', name: 'Employment Contract' },
    { id: '2', name: 'NDA Agreement' },
    { id: '3', name: 'Service Agreement' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  createContract(): void {
    if (!this.selectedBlueprintId || !this.contractName) {
      alert('Please fill all required fields');
      return;
    }

    // 🔹 get existing contracts
    const contracts = JSON.parse(localStorage.getItem('contracts') || '[]');

    // 🔹 find blueprint name
    const blueprint = this.blueprints.find(
      b => b.id === this.selectedBlueprintId
    );

    // 🔹 new contract object
    const contract = {
      id: Date.now(),
      name: this.contractName,
      blueprintId: this.selectedBlueprintId,
      blueprintName: blueprint?.name || '',
      status: 'created',
      createdAt: new Date().toLocaleDateString()
    };

    // 🔹 save to localStorage
    contracts.push(contract);
    localStorage.setItem('contracts', JSON.stringify(contracts));

    // 🔹 go back to contracts page
    this.router.navigate(['/contracts']);
  }
}
