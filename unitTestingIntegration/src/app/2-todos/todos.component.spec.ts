import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs'

import { TodosComponent } from './todos.component';
import { TodoService } from "./todo.service";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); // We need to move this because the spyOn
    // ngOnInit and initialice the todos propertys.
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should load todos from the server', fakeAsync(() => {
    // Only get dependencys thar are register at the module level
    // let service = TestBed.get(TodoService);
    // Get the services from app.module
    let service = fixture.debugElement.injector.get(TodoService);
    //spyOn(service, 'getTodos').and.returnValue(Observable.from([ [1, 2, 3] ]));
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();

    // First solution using async
    /* fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    })*/

    // Second solution using fakeAsync and tick
    tick();
    expect(component.todos.length).toBe(3);
  }));
});

