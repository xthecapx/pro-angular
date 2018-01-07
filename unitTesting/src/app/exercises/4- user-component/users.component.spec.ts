import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let service: UserService;

  beforeEach(() => {
    service = new UserService(null);
    component = new UsersComponent(service);
  });

  // 1. User services should be called and users should be setted
  it('should set users property with the users retrieved from the server', () => {
    let users = [ 1, 2, 3 ];
    spyOn(service, 'getUsers').and.returnValue(Observable.from([ users ]));

    component.ngOnInit();

    expect(component.users).toBe(users);
  });

  // Delete actions
  describe('When deleting a user', () => {
    let user;

    beforeEach(() => {
      component.users = [
        { id: 1 },
        { id: 2 },
      ];

      user = component.users[0];
    });

    // 1. If user cofirm it should delete it
    it('should remove the selected user from the list if the user confirms deletion', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      spyOn(service, 'deleteUser').and.returnValue(Observable.empty());

      component.deleteUser(user);

      expect(component.users.indexOf(user)).toBe(-1);
    });

    // 2. If user won't confirm it won't delete
    it('should NOT remove the seleted user from the list if the user cancels', () => {
      spyOn(window, 'confirm').and.returnValue(false);

      component.deleteUser(user);

      expect(component.users.indexOf(user)).toBeGreaterThan(-1);
    });

    // 3. If user cofirm it should delete it and call _service.deleteUser
    it('should call the server to delete the selected user if the user confirms deletion', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      let spy = spyOn(service, 'deleteUser').and.returnValue(Observable.empty());

      component.deleteUser(user);

      expect(spy).toHaveBeenCalledWith(user.id);
    });

    // 4. Should not call the server if user cancels
    it('should NOT call the server to delete the selected user if the user cancels', () => {
      spyOn(window, 'confirm').and.returnValue(false);
      let spy = spyOn(service, 'deleteUser').and.returnValue(Observable.empty());

      component.deleteUser(user);

      expect(spy).not.toHaveBeenCalled();
    });

    // 5. If user cofirm and there is an error on the server it undo the changes
    it('should undo deletion if the call to the server fails', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      // We need to change the implementation of alert, otherwise
      // it will popup a dialog when running our unit tests.
      spyOn(window, 'alert').and.callFake(() => {});
      spyOn(service, 'deleteUser').and.returnValue(Observable.throw('error'));

      component.deleteUser(user);

      expect(component.users.indexOf(user)).toBeGreaterThan(-1);
    });

    // 6. If user confirm and there is an error it should display an alert
    it('should display an error if the call to the server fails', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      let spy = spyOn(window, 'alert').and.callFake(() => {});
      spyOn(service, 'deleteUser').and.returnValue(Observable.throw('error'));

      component.deleteUser(user);

      expect(spy).toHaveBeenCalled();
    });
  });
});

