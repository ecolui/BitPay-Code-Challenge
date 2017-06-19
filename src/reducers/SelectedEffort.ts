
//Mock Initial in initial state
let initState = {
    effort : 19,
    effortStr : "19",
    exercise : "Pushups",
    week : 7,
}
export const selectedEffortReducer = (state = initState, action) => {
    switch (action.type){
        case ('UPDATE_EFFORT') :
            return {
                effort : action.payload.effort,
                effortStr : action.payload.effortStr,
                exercise : state.exercise,
                week : state.week
            }; 
        default: return state
    }
}

