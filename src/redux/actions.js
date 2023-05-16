export const SET_START = 'SET_START';
export const SET_DESTINATION = 'SET_DESTINATION';
export const SUBMITTED = 'SUBMITTED';

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
