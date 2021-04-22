import { combineReducers,createStore } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user:userReducer
});

export const store = createStore(rootReducer);

export default rootReducer;