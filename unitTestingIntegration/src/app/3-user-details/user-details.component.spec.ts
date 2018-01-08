import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { UserDetailsComponent } from './user-details.component';

// To test the router we use Stub method, we provide a fake implementation.
class RouterStub {
  navigate(params) { }
}

class ActivedRouteStub {
  private subject = new Subject();

  // params: Observable<any> = Observable.empty();

  get params() {
    return this.subject.asObservable();
  }

  push(value) {
    this.subject.next(value);
  }
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

  it('Should redirect the user to the user page after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('Should navigate the user to the not found page when invalid user id is pass', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    let route: ActivedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ id: 0 });

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});

