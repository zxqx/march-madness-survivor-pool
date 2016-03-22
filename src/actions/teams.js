import { fetchTeamList } from '../middleware/api';

export const UPDATE_TEAM_LIST = 'UPDATE_TEAM_LIST';
export const CLEAR_TEAM_LIST = 'CLEAR_TEAM_LIST';

export function updateTeamList(payload) {
  return {
    type: UPDATE_TEAM_LIST,
    payload
  };
}

export function getTeamList() {
  return async function(dispatch) {
    const payload = await fetchTeamList();
    dispatch(updateTeamList(payload));
  };
}

export function clearTeamList() {
  return {
    type: CLEAR_TEAM_LIST
  };
}
