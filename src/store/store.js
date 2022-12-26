import { createStore } from "redux";
import * as types from "./action-types";

export const initialState = {
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
      total = state.total + action.payload["Price"];
      chosenItems.push(...state.chosenItems, action.payload["Name"]);
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

export const signOn = (state = initialState, action) => {
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

export const store = createStore(totalReducer);
