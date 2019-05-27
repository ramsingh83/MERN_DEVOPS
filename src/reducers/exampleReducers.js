/**
 * @description Example Reducer to dispatch example actions.
 */
import { EXAMPLE_TYPE } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
  case EXAMPLE_TYPE:
    return state;
  default:
    return state;
  }
}
