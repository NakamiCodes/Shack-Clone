import * as types from "./action-types";

export const addTotal = (price, item) => {
  console.log("inside add action");
  return {
    type: types.ADD_TOTAL,
    payload: {
      price: price,
      item: item,
    },
  };
};

export const removeTotal = (price, item) => {
  console.log("inside remove action");
  return {
    type: types.REMOVE_TOTAL,
    payload: {
      price: price,
      item: item,
    },
  };
};

export const signIn = (user, userID, isManager) => {
  console.log("inside sign in");
  return {
    type: types.SIGN_IN,
    payload: {
      user: user,
      userID: userID,
      isManager: isManager,
    },
  };
};

export const signOut = (user, userID, isManager) => {
  console.log("inside sign out");
  return {
    type: types.SIGN_OUT,
    payload: {
      user: user,
      userID: userID,
      isManager: isManager,
    },
  };
};
