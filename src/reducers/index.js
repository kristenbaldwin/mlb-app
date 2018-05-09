import { combineReducers } from 'redux';
import teamReducer from './team_id';

const rootReducer = combineReducers({
    team: teamReducer
});

export default rootReducer;