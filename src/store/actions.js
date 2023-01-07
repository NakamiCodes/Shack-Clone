import * as types from "./action-types";

export const addTotal = (price, item) => {
  //console.log("inside add action: price and item", price, item);
  return {
    type: types.ADD_TOTAL,
    payload: {
      price: price,
      item: item,
    },
  };
};

export const removeTotal = (price, item) => {
  //console.log("inside remove action: price and item", price, item);
  return {
    type: types.REMOVE_TOTAL,
    payload: {
      price: price,
      item: item,
    },
  };
};

export const signIn = (user, userID, isManager) => {
  // console.log(
  //   "inside sign in: user, userID, isManager",
  //   user,
  //   userID,
  //   isManager
  // );
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
  // console.log(
  //   "inside sign out in: user, userID, isManager",
  //   user,
  //   userID,
  //   isManager
  // );
  return {
    type: types.SIGN_OUT,
    payload: {
      user: user,
      userID: userID,
      isManager: isManager,
    },
  };
};
