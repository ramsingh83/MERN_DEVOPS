/**
 * @description Reducers.
 */

import { combineReducers } from 'redux';
import exampleReducer from './exampleReducers';

export default combineReducers({
  example: exampleReducer
});
