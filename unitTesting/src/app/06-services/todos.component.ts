import { TodoService } from './todo.service'

export class TodosComponent {
  todos: any[] = [];
  message;

  constructor(private service: TodoService) {}

  // What should be tested:
  // 1. Call ngOnInit() and ensure that todos propertys is initialized
  // Note: We don't use the real service because it could make http request to
  // the backend. In a unit test we don't want to take our dataBase, we wan't
  // to isolate the component for external resources.
  ngOnInit() {
    // Call the service and initialice todos array
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  // What should be tested:
  // 1. Make sure that service add is call.
  // 2. if call is successfully the respond is added to this.todos
  // 3. if call has an error the respond should be added to this.message
  add() {
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      error => this.message = error);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }
}

