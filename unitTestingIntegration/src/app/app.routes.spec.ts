import { routes } from './app.routes';
import { UsersComponent } from "./users/users.component";

describe('Routes', () => {
  // Sort it !!
  it('Should contain a route for /users', () => {
    expect(routes).toContain({ path: 'users', component: UsersComponent });
  });
});
