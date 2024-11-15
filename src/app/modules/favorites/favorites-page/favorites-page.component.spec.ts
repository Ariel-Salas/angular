import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacoritesPageComponent } from './favorites-page.component';

describe('FavoritesPageComponent', () => {
  let component: FacoritesPageComponent;
  let fixture: ComponentFixture<FacoritesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacoritesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
