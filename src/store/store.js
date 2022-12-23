import { createStore } from "redux";
import * as types from "./action-types";

export const initialState = {
  total: 0,
  user: "",
  userID: 0,
  isManager: false,
};

export const totalReducer = (state = initialState, action) => {
  let total;
  switch (action.type) {
    case types.ADD_TOTAL:
      total = state.total + action.paylod["price"];
      return {
        ...state,
        total,
      };
    case types.REMOVE_TOTAL:
      total = state.total - action.paylod["price"];
      return {
        ...state,
        total,
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
      user = action.paylod["user"];
      userID = action.paylod["userID"];
      isManager = action.paylod["isManager"];
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
