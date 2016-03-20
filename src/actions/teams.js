import { fetchTeamList } from '../middleware/api';

export const UPDATE_TEAM_LIST = 'UPDATE_TEAM_LIST';

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
