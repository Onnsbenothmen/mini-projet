import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadFoodComponent } from './aad-food.component';

describe('AadFoodComponent', () => {
  let component: AadFoodComponent;
  let fixture: ComponentFixture<AadFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AadFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
