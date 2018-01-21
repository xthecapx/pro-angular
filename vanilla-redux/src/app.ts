import { increment, decrement } from "./store/actions";
import { Store } from "./store/store";
import { Calculator } from "./calculator/calculator";
import { Main } from "./main/main";

const store = new Store();
const main = new Main(store);
main.changeStateListener();

const calculator = new Calculator();
calculator.dispatchActions();
