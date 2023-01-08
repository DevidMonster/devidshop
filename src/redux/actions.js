export const switchMode = (data) => {
    return {
        type: 'SWITCH',
        payload: data
    } 
}

export const saveURL = (data) => {
    return {
        type: 'SAVE',
        payload: data
    }
}