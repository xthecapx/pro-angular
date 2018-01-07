import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
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
});
