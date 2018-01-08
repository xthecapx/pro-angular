import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeterComponent } from './greeter.component';

describe('GreeterComponent', () => {
  // Declaration of variables
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  // Configuration of the testBed module
  // The component template is in a separate file and we need to instruct
  // angular to compile that template with the component
  // implementation. "compileComponents();"
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeterComponent ]
    })
    .compileComponents();
  }));

  // Creation of the instances of our module
  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
