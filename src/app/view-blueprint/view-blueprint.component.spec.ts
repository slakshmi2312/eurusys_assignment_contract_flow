import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBlueprintComponent } from './view-blueprint.component';

describe('ViewBlueprintComponent', () => {
  let component: ViewBlueprintComponent;
  let fixture: ComponentFixture<ViewBlueprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBlueprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBlueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
