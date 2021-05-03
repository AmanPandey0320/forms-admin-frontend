const initState = {
    color:null,
    opacity:null,
    header:null 
}

const useReducer = (state = initState,action) => {
    
    if(action.type === 'SET_COLOR'){
        state.color = action.color;
    }else if( action.type === 'SET_OPACITY'){
        state.opacity = action.opacity
    }else if( action.type === 'SET_HEADER'){
        state.header = action.header
    }
    
    return state;
}

export default useReducer;