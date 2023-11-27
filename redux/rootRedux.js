import { combineReducers } from 'redux';
import Redux from './redux';

const reducer = combineReducers({
    item:Redux
}) ;

//const rootReducer = combineReducers({Redux});

export default (state,action) => reducer(state,action);