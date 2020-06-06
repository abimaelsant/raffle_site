import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaComponent } from './rifas.component';

describe('RifaComponent', () => {
  let component: RifaComponent;
  let fixture: ComponentFixture<RifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RifaComponent ]
    })
    .compileComponents();
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(RifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
