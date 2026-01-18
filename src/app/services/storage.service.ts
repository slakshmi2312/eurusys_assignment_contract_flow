import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private BLUEPRINTS_KEY = 'blueprints';
  private CONTRACTS_KEY = 'contracts';

  // ================= BLUEPRINTS =================

  getBlueprints(): any[] {
    return JSON.parse(localStorage.getItem(this.BLUEPRINTS_KEY) || '[]');
  }

  saveBlueprint(blueprint: any): void {
    const blueprints = this.getBlueprints();
    blueprints.push(blueprint);
    localStorage.setItem(this.BLUEPRINTS_KEY, JSON.stringify(blueprints));
  }

  deleteBlueprint(id: string): void {
    const blueprints = this.getBlueprints().filter(b => b.id !== id);
    localStorage.setItem(this.BLUEPRINTS_KEY, JSON.stringify(blueprints));
  }

  // ================= CONTRACTS =================

  getContracts(): any[] {
    return JSON.parse(localStorage.getItem(this.CONTRACTS_KEY) || '[]');
  }

  saveContract(contract: any): void {
    const contracts = this.getContracts();
    contracts.push(contract);
    localStorage.setItem(this.CONTRACTS_KEY, JSON.stringify(contracts));
  }

  getContractById(id: string): any {
    return this.getContracts().find(c => c.id === id);
  }

  updateContractStatus(id: string, status: string): void {
    const contracts = this.getContracts();
    const contract = contracts.find(c => c.id === id);

    if (contract) {
      contract.status = status;
      localStorage.setItem(this.CONTRACTS_KEY, JSON.stringify(contracts));
    }
  }

  deleteContract(id: string): void {
    const contracts = this.getContracts().filter(c => c.id !== id);
    localStorage.setItem(this.CONTRACTS_KEY, JSON.stringify(contracts));
  }
  
}
