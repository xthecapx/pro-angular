import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null); // We don't pass the http because we don't do http request in our test
    component = new TodosComponent(service);
  });

  it('Should set todos property with the items returned from the server', () => {
    // ARRANGE
    // You can check if the method was call, change the implementation of that
    // method, return different values or thorw an error
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      /*return Observable.from([[
        {id: 1, title: 'a'},
        {id: 2, title: 'b'},
        {id: 3, title: 'c'}
      ]]);*/
      return Observable.from([ todos ]);
    });

    // ACT
    component.ngOnInit();

    // ASSERT
    // expect(component.todos.length).toBeGreaterThan(0);
    // expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(todos);
  });

  it('Should call the server to save the changes when a new todo item is added', () => {
    // ARRANGE
    let spy = spyOn(service, 'add').and.callFake((t) => {
      return Observable.empty();
    });

    // ACT
    component.add();

    // ASSERT
    expect(spy).toHaveBeenCalled();
  });

  it('Should add the new todo returned from the server', () => {
    // ARRANGE
    let todo = [ {id: 1, title: 'a'} ];
    /*let spy = spyOn(service, 'add').and.callFake((t) => {
      return Observable.from(todo);
    });*/
    // This is a cleaner option
    let spy = spyOn(service, 'add').and.returnValue(Observable.from(todo));

    // ACT
    component.add();

    // ASSERT
    // expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
    // expect(component.todos).toBe(todo);
    expect(component.todos === todo).toBeTruthy;
  });

  it('Should set the message property if server returns an error', () => {
    // ARRANGE
    let error = 'Error from the server';
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

    // ACT
    component.add();

    // ASSERT
    expect(component.message).toBe(error);
  });

  it('Should call the server to delete a todo item if the user confirm', () => {
    // ARRANGE
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    // ACT
    component.delete(1);

    // ASSERT
    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('Should NOT call the server to delete a todo item if the user cancel', () => {
    // ARRANGE
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    // ACT
    component.delete(1);

    // ASSERT
    expect(spy).not.toHaveBeenCalled();
  });
});
