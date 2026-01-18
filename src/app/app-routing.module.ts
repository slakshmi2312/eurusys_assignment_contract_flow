import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlueprintsComponent } from './blueprints/blueprints.component';
import { ContractsComponent } from './contracts/contracts.component';
import { CreateBlueprintComponent } from './create-blueprint/create-blueprint.component';

import { ViewContractComponent } from './view-contract/view-contract.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { ViewBlueprintComponent } from './view-blueprint/view-blueprint.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'blueprints', component: BlueprintsComponent },
   { path: 'contracts', component: ContractsComponent },
   { path: 'create-blueprint', component: CreateBlueprintComponent },
   { path: 'create-contract', component: CreateContractComponent },
   { path: 'contracts/view/:id', component: ViewContractComponent },
   { path: 'blueprints/view/:id', component: ViewBlueprintComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
