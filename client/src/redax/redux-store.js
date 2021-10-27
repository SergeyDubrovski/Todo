import { combineReducers, createStore } from 'redux';
import { dayStartReducer } from './reducers/dayStartReducer'
import { taskDayReducer } from './reducers/taskDayReducer'

let redusers = combineReducers({
    dayWeek: dayStartReducer,
    weekTask: taskDayReducer
});

let store = createStore(redusers);

export default store;

