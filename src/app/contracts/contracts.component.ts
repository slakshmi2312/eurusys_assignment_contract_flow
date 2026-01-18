import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

type ContractTab = 'all' | 'active' | 'pending' | 'signed';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit, AfterViewInit {

  activeTab: ContractTab = 'all';

  contracts: any[] = [];
  filteredContracts: any[] = [];

  // ✅ COUNT VARIABLES (MISSING BEFORE)
  totalCount = 0;
  activeCount = 0;
  pendingCount = 0;
  signedCount = 0;

  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.loadContracts();
  }

  ngAfterViewInit(): void {
    this.loadContracts();
  }

  loadContracts(): void {
    this.contracts = this.storage.getContracts();

    this.totalCount = this.contracts.length;

    this.pendingCount = this.contracts.filter(
      c => c.status === 'created'
    ).length;

    this.activeCount = this.contracts.filter(
      c => c.status === 'approved' || c.status === 'sent'
    ).length;

    this.signedCount = this.contracts.filter(
      c => c.status === 'signed' || c.status === 'locked'
    ).length;

    this.applyFilter();
  }

  setTab(tab: ContractTab): void {
    this.activeTab = tab;
    this.applyFilter();
  }

  applyFilter(): void {
    if (this.activeTab === 'all') {
      this.filteredContracts = [...this.contracts];
    } 
    else if (this.activeTab === 'active') {
      this.filteredContracts = this.contracts.filter(
        c => c.status === 'approved' || c.status === 'sent'
      );
    } 
    else if (this.activeTab === 'pending') {
      this.filteredContracts = this.contracts.filter(
        c => c.status === 'created'
      );
    } 
    else if (this.activeTab === 'signed') {
      this.filteredContracts = this.contracts.filter(
        c => c.status === 'signed' || c.status === 'locked'
      );
    }
  }

  openCreateContract(): void {
    this.router.navigate(['/create-contract']);
  }

  viewContract(contractId: string): void {
    this.router.navigate(['/contracts/view', contractId]);
  }
}
