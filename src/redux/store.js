import { createStore, combineReducers } from 'redux';
import { coordinates } from './reducer';

export const rootReducer = combineReducers({
  coordinates: coordinates,
});

export const store = createStore(rootReducer);
