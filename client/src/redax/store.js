/*import {dayStartReducer} from './reducers/dayStartReducer';
import {taskDayReducer} from './reducers/taskDayReducer';

let store = {
    _state: {
        dayWeek: [
            ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
            ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
            []
        ],       

        weekTask: {
            mon: [[], []],
            tue: [[], []],
            wed: [[], []],
            thu: [[], []],
            fri: [[], []],
            sat: [[], []],
            sun: [[], []],
            text: '',
            weekN: 0,
            day: []
        }
    },

    getState() {
        return this._state
    },
    _rerender() {
        console.log('State');
    },
    dispatch(action) {
        this._state.dayWeek = dayStartReducer(this._state.dayWeek, action); 
        this._state.weekTask = taskDayReducer(this._state.weekTask, action); 

        this._rerender(); 
    },

    subscribe(observer) {
        this._rerender = observer;
    }

}

export default store;
window.store = store;*/