import { combineReducers,createStore } from 'redux';
import userReducer from './userReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
    user:userReducer,
    theme:themeReducer
});

export const store = createStore(rootReducer);

export default rootReducer;

