import loginReducerConstants from "../constants/loginReducerConstants";

export const loginActionSetLoginState = (isLoggedIn) => {
  return {
    type: loginReducerConstants.LOGIN_STATE_CHANGE,
    payload: isLoggedIn
  }
}
