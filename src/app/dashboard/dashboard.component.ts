import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalContracts = 0;
  activeContracts = 0;
  pendingContracts = 0;
  signedContracts = 0;

  recentContracts: any[] = [];

  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.loadDashboardStats();
  }

  loadDashboardStats(): void {
    const contracts = this.storage.getContracts();

    this.totalContracts = contracts.length;

    this.pendingContracts = contracts.filter(
      c => c.status === 'created'
    ).length;

    this.activeContracts = contracts.filter(
      c => c.status === 'approved' || c.status === 'sent'
    ).length;

    this.signedContracts = contracts.filter(
      c => c.status === 'signed' || c.status === 'locked'
    ).length;

    // 🔥 RECENT CONTRACTS (latest 4)
    this.recentContracts = [...contracts]
      .sort((a, b) => b.id - a.id) // latest first
      .slice(0, 4);
  }

  // Navigation
  openCreateBlueprint(): void {
    this.router.navigate(['/create-blueprint']);
  }

  openCreateContract(): void {
    this.router.navigate(['/create-contract']);
  }

  openContracts(): void {
    this.router.navigate(['/contracts']);
  }

  openBlueprints(): void {
    this.router.navigate(['/blueprints']);
  }

  viewContract(id: any): void {
    this.router.navigate(['/contracts/view', id]);
  }
}
