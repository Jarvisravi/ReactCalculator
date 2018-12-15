import { combineReducers } from 'redux';
import CalculateReducers from './CalculateReducers';

export default combineReducers({
  calculate: CalculateReducers
});
