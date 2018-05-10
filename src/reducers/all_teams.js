//Reducer
const initialState = {
    teams: []
}

function allTeams(state = initialState, action) {
    switch (action.type) {
        case "ALL_TEAMS":
            return {
                teams: action.teams
            }
        default: 
            return state;
    }
}

export default allTeams;

