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
        case "SAVE":
            // lưu URL
            localStorage.setItem('prevUrl', action.payload);
            return {
                ...state,
                // Thêm thuộc tính URL mới vào state
                prevUrl: action.payload,
            };
        default :
            return state
            
    }
}

export default rootReducer;