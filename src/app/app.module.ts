import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   // ✅ ADD THIS

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlueprintsComponent } from './blueprints/blueprints.component';
import { ContractsComponent } from './contracts/contracts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateBlueprintComponent } from './create-blueprint/create-blueprint.component';

import { ViewContractComponent } from './view-contract/view-contract.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { ViewBlueprintComponent } from './view-blueprint/view-blueprint.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BlueprintsComponent,
    ContractsComponent,
    NavbarComponent,
    CreateBlueprintComponent,

    ViewContractComponent,
    CreateContractComponent,
    ViewBlueprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule            // ✅ ADD THIS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
