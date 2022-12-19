import { createStore } from "redux";

export const sampleReducer = (state = { total: 0 }, action) => {
  switch (action) {
    case "add":
      state = { ...state };
  }
  return state;
};

export const store = createStore(sampleReducer);
