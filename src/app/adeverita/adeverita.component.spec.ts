import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeveritaComponent } from './adeverita.component';

describe('AdeveritaComponent', () => {
  let component: AdeveritaComponent;
  let fixture: ComponentFixture<AdeveritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdeveritaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdeveritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
