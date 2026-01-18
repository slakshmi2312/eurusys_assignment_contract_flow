import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-blueprints',
  templateUrl: './blueprints.component.html',
  styleUrls: ['./blueprints.component.css']
})
export class BlueprintsComponent implements OnInit {

  blueprints: any[] = [];   // ✅ declared

  constructor(
    private router: Router,
    private storage: StorageService
  ) {}                      // ✅ single constructor

  ngOnInit(): void {        // ✅ single ngOnInit
    this.blueprints = this.storage.getBlueprints();
  }

  openCreateBlueprint(): void {
    this.router.navigate(['/create-blueprint']);
  }
  viewBlueprint(id: number): void {
  this.router.navigate(['/blueprints/view', id]);
}
}
