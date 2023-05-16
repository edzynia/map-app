import { createStore } from 'redux';

export const SET_START = 'SET_START';
export const SET_DESTINATION = 'SET_DESTINATION';
export const SUBMITTED = 'SUBMITTED';

const initialState = {
  start: '',
  destination: '',
};

const coordinates = (state = initialState, { type, payload }) => {
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

export const store = createStore(coordinates);

export const setStart = (value) => ({
  type: SET_START,
  payload: value,
});

export const setDestination = (value) => ({
  type: SET_DESTINATION,
  payload: value,
});

export const setSubmitted = () => ({
  type: SUBMITTED,
});
