import * as types from "./action-types";
import { configureStore } from "@reduxjs/toolkit";

export const initialState = {
  units: [
    { id: "a", x: 0, y: 0 },
    { id: "b", x: 1, y: 0 },
    { id: "c", x: 4, y: 0 },
  ],
  total: 0,
  user: "",
  userID: 0,
  isManager: false,
  chosenItems: [],
};

export const totalReducer = (state = initialState, action) => {
  let total;
  const chosenItems = [];
  switch (action.type) {
    case types.ADD_TOTAL:
      total = state.total + action.payload.price.Price;
      //console.log("reducer action", action.payload);
      chosenItems.push(...state.chosenItems, action.payload.price);
      //console.log(chosenItems);
      return {
        ...state,
        total,
        chosenItems,
      };
    case types.REMOVE_TOTAL:
      total = state.total - action.payload["price"];
      chosenItems.splice(chosenItems.indexOf(action.payload["Name"]), 1);
      return {
        ...state,
        total,
        chosenItems,
      };
    default:
      return state;
  }
};

export const signOnReducer = (state = initialState, action) => {
  let user;
  let userID;
  let isManager;
  switch (action.type) {
    case types.SIGN_IN:
      user = action.payload["user"];
      userID = action.payload["userID"];
      isManager = action.payload["isManager"];
      return {
        ...state,
        user,
        userID,
        isManager,
      };
    case types.SIGN_OUT:
      user = "";
      userID = 0;
      isManager = false;
      return {
        ...state,
        user,
        userID,
        isManager,
      };
    default:
      return state;
  }
};

const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle your actions here
    default:
      return state;
  }
};

export const rootReducer = () => {
  return {
    totalReducer,
    signOnReducer,
    gridReducer,
  };
};

export const store = configureStore({
  reducer: {
    total: totalReducer,
    signOn: signOnReducer,
  },
});
