const INITIAL_STATE = {
  user: {},
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST': {
      const newState = { ...state };

      newState.loading = true;

      return newState;
    }
    case '@auth/SIGN_IN_FAILURE': {
      const newState = { ...state };

      newState.loading = false;

      return newState;
    }
    case '@auth/SIGN_IN_SUCCESS': {
      const newState = { ...state };

      newState.user = action.payload.user;
      newState.token = action.payload.token;
      newState.signed = true;
      newState.loading = false;

      return newState;
    }
    case '@auth/SIGN_OUT': {
      const newState = { ...state };

      newState.user = {};
      newState.token = null;
      newState.signed = false;
      newState.loading = false;

      return newState;
    }
    default:
      return state;
  }
}
