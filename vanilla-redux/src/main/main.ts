import { Store } from "../store/store";

export class Main {
  $root;
  $results;
  template = `<div class="increment">Increment</div>
              <div class="decrement">Decrement</div>
              <div class="results"></div>`;

  constructor(private store: Store) {
    this.$root = document.querySelector("#root");
    this.$root.innerHTML = this.template;

    this.$results = document.querySelector(".results");
    console.log("INITIAL STATE OF APP: ");
    this.uiRender();
  }

  // subscribe a state change handler
  changeStateListener() {
    console.log("1. UI Event listener");
    document.addEventListener("state", this.uiRender.bind(this));
  }

  uiRender() {
    console.log("5. 'state' Event emitted: ");
    this.$results.innerHTML = JSON.stringify(this.store.getState());
    console.log("6. Re-rendering UI ", this.store.getState());
    console.log("******************************************");
  }
}
