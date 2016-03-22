import { createReducer } from 'redux-create-reducer';
import { UPDATE_TEAM_LIST, CLEAR_TEAM_LIST } from '../actions/teams';

const initialState = [];

export default createReducer(initialState, {
  [UPDATE_TEAM_LIST](state, action) {
    return action.payload;
  },
  [CLEAR_TEAM_LIST](state, action) {
    return initialState;
  }
});
