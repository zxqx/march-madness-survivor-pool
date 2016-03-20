import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import teams from './teams';

const rootReducer = combineReducers({
  routing,
  teams
});

export default rootReducer;
