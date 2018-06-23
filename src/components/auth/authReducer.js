import {
  RESET_LOCAL_STATE,
  ERROR_MESSAGE,
  IS_LOADING,
} from './authTypes';

const INITIAL_STATE = {
  errorMessage: '',
  successfull: false,
  isLoading: false,
  resetState: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET_LOCAL_STATE:
      return { ...state, resetState: action.payload };
    case ERROR_MESSAGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
