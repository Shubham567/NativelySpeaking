import loginReducerConstants from "../constants/loginReducerConstants";

const defaultLoginState = {
  loggedIn: false,
}

const loginReducer = (state = defaultLoginState,action) => {
  switch (action.type) {
    case loginReducerConstants.LOGIN_STATE_CHANGE: return {...state,isLoggedIn: action.payload};
    default: return state;
  }
}

export default loginReducer;
