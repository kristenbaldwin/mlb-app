//Reducer
const initialState = {
    teamId: "0"
}

function teamReducer(state = initialState, action) {
    switch (action.type) {
        case "SELECT_TEAM":
        return {
            ...state,
            teamId: action.id
        }
        default: 
            return state;
    }
}

export default teamReducer;

