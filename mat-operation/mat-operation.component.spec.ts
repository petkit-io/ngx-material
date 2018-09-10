import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatOperationComponent } from './mat-operation.component';

describe('MatOperationComponent', () => {
  let component: MatOperationComponent;
  let fixture: ComponentFixture<MatOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
