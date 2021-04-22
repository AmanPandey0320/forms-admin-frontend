const initState = {
    token:null
}

const useReducer = (state = initState,action) => {
    
    if(action.type === 'SET_USER'){
        state.token = action.token
    }
    return state;
}

export default useReducer;