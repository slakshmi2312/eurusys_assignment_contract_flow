import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-view-blueprint',
  templateUrl: './view-blueprint.component.html',
  styleUrls: ['./view-blueprint.component.css']
})
export class ViewBlueprintComponent implements OnInit {

  blueprint: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.router.navigate(['/blueprints']);
      return;
    }

    const blueprints = this.storage.getBlueprints();
    this.blueprint = blueprints.find(b => b.id == id);

    if (!this.blueprint) {
      this.router.navigate(['/blueprints']);
    }
  }

  goBack(): void {
    this.router.navigate(['/blueprints']);
  }

  useTemplate(): void {
    this.router.navigate(['/create-contract'], {
      queryParams: { blueprintId: this.blueprint.id }
    });
  }
}
