import { SET_START, SET_DESTINATION, SUBMITTED } from './actions';

const initialState = {
  start: '',
  destination: '',
};

export const coordinates = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_START:
      return {
        ...state,
        start: payload,
      };
    case SET_DESTINATION:
      return {
        ...state,
        destination: payload,
      };
    case SUBMITTED:
      return initialState;

    default:
      return state;
  }
};
