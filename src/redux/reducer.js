const initState = {
    active: false
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "SWITCH": 
            let newState = !action.payload
            localStorage.setItem('mode', newState)
            return {
                ...state,
                active: newState
            }
        default :
            return state
            
    }
}

export default rootReducer;