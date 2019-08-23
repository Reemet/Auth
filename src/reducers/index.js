import { combineReducers } from 'redux';
import loginReducer from './login_reducer';


const reducers = combineReducers({
    login: loginReducer
});

export default reducers;