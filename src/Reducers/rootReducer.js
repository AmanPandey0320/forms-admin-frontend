import { combineReducers,createStore } from 'redux';
import userReducer from './userReducer';
import themeReducer from './themeReducer';
import templateReducer from './templateReducer';

const rootReducer = combineReducers({
    user:userReducer,
    theme:themeReducer,
    template:templateReducer
});

export const store = createStore(rootReducer);

export default rootReducer;

