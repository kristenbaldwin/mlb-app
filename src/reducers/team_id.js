//Reducer
const initialState = {
    teamId: "0"
}

function team_id(state = initialState, action) {
    switch (action.type) {
        case "SELECT_TEAM":
            return {
                teamId: action.id
            }
        default: 
            return state;
    }
}

export default team_id;

