import { createStore, combineReducers } from 'redux';
import { coordinates } from './reducer';
import { loadState, saveState } from '../helpers/local-storage';

export const rootReducer = combineReducers({
  coordinates: coordinates,
});
const persistedState = loadState();

export const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});
