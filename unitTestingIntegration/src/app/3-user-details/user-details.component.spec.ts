import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { UserDetailsComponent } from './user-details.component';

// To test the router we use Stub method, we provide a fake implementation.
class RouterStub {
  navigate(params) { }
}

class ActivedRouteStub {
  params: Observable<any> = Observable.empty();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        {
          provide: Router,
          useClass: RouterStub
        },
        {
          provide: ActivatedRoute,
          useClass: ActivedRouteStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

