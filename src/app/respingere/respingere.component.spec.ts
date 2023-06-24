import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespingereComponent } from './respingere.component';

describe('RespingereComponent', () => {
  let component: RespingereComponent;
  let fixture: ComponentFixture<RespingereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespingereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespingereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
