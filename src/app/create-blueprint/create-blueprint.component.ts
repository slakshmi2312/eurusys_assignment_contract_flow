import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-create-blueprint',
  templateUrl: './create-blueprint.component.html',
  styleUrls: ['./create-blueprint.component.css']
})
export class CreateBlueprintComponent {

  blueprintName = '';
  description = '';

  fields: any[] = [];

  constructor(
    private storage: StorageService,
    private router: Router
  ) {}

  addField(): void {
    this.fields.push({
      type: 'Text',
      label: ''
    });
  }

  removeField(index: number): void {
    this.fields.splice(index, 1);
  }

  createBlueprint(): void {
    if (!this.blueprintName) {
      return;
    }

    const blueprint = {
      id: Date.now().toString(),   // string id is safer
      name: this.blueprintName,
      description: this.description,
      fields: this.fields,
      createdAt: new Date().toLocaleDateString()
    };

    // ✅ CORRECT METHOD
    this.storage.saveBlueprint(blueprint);

    // Navigate back to blueprint list
    this.router.navigate(['/blueprints']);
  }
}
