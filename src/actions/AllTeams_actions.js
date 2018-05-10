//Action

export const loadAllTeams = () => {
    return dispatch => {
        fetch('http://lookup-service-prod.mlb.com/json/named.team_all.bam?sport_code=%27mlb%27&active_sw=%27Y%27&all_star_sw=%27N%27')
        .then(results => results.json())
        .then(json => json.team_all.queryResults.row)
        .then(data => dispatch(loadTeams(data)))
   }
}

export const loadTeams = (teams) => {
    return {
        type: "ALL_TEAMS",
        teams: teams
    }
}
