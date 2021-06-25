const initState = {
    forms:[],
    saved:{}
}

const useReducer = (state = initState,action) => {
    
    if(action.type === 'SET_DATA'){
        state.forms = action.forms
    }else if(action.type === 'SAVE_FORM'){
        const { id,form } = action;
        state.saved[`${id}`] = form;
    }
    return state;
}

export default useReducer;