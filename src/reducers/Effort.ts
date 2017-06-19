
//Mock Initial in initial state
let initState = [
    {
        effort : 19,
        effortStr : "19",
        exercise : "Pushups",
        week : 7,
    },
    {
        effort : 65,
        effortStr : "19",
        exercise : "Pushups",
        week : 8,
    },    
];

export const effortReducer = (state = initState, action) => {
    switch (action.type){
        case ('ADD_EFFORT') :
            return [...state, action.payload];
        case ('UPDATE_EFFORT') :
            return state.map(
                (item) => {
                    if (    item.exercise != undefined && item.week != undefined
                        &&  item.exercise == action.payload.exercise
                        &&  item.week == action.payload.week
                        ){
                            let newState = Object.assign({},item);
                            newState.effort = action.payload.effort;
                            newState.effortStr = action.payload.effortStr;                            
                            return newState;
                        }
                    else {
                        return item;
                    }
                }
            );
        case ('REMOVE_EFFORT') :
            return state;
        case ('GET_EFFORT_BY_WEEK') :
            return state;
        default: return state
    }
}

