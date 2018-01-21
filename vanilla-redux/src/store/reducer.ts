import { initialState, StateModel } from "./state";
import { ActionModel } from "./actions.model";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const reducer: any = (state: StateModel, action: ActionModel) => {
  switch (action.type) {
    case INCREMENT:
      const increment = state.value + 1;
      console.log("Reducing - Last state: ", state);

      return {
        ...state,
        value: increment
      };
    case DECREMENT:
      const decrement = state.value - 1;
      console.log("Reducing - Last state: ", state);

      return {
        ...state,
        value: decrement
      };
    default:
      return state;
  }
};
