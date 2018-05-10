import { combineReducers } from 'redux';
import team_id from './team_id';
import allTeams from './all_teams';

const rootReducer = combineReducers({
    team: team_id,
    teams: allTeams
});

export default rootReducer;