const initState = {
    forms:[]
}

const useReducer = (state = initState,action) => {
    
    if(action.type === 'SET_DATA'){
        state.forms = action.forms
    }
    return state;
}

export default useReducer;