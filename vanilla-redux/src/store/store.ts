import { reducer, INCREMENT } from "./reducer";
import { increment } from "./actions";
import { initialState, StateModel } from "./state";

export class Store {
  // create a store with reducer
  state: StateModel;

  // Action Event Listener
  constructor() {
    // create a store with reducer
    this.state = initialState;

    // Dispatcher event emitter
    document.addEventListener(
      "action",
      (e: any) => {
        this.dispatch(e.detail);
        console.log("4. Update store: ", this.state);
        document.dispatchEvent(new CustomEvent("state"));
      },
      false
    );
  }

  dispatch(action) {
    console.log("3. Dispatching: ", action);
    this.state = reducer(this.state, action);
  }

  getState() {
    return this.state;
  }
}
