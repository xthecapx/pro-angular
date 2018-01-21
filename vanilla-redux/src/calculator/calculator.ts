import { decrement, increment } from "../store/actions";

export class Calculator {
  $increment;
  $decrement;

  constructor() {
    this.$increment = document.querySelector(".increment");
    this.$decrement = document.querySelector(".decrement");
  }

  // UI event listener
  dispatchActions() {
    this.$increment.addEventListener("click", function() {
      // dispatch a action
      console.log("2. Do: ", increment());
      document.dispatchEvent(
        new CustomEvent("action", { detail: increment() })
      );
    });

    this.$decrement.addEventListener("click", function() {
      console.log("2. Do: ", decrement());
      // dispatch a action
      document.dispatchEvent(
        new CustomEvent("action", { detail: decrement() })
      );
    });
  }
}
