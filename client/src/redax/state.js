import {dayStartReducer} from './reducers/dayStartReducer';
import {taskDayReducer} from './reducers/taskDayReducer';

const DAY_START = 'DAY-START';
const PLAN_TEXT = 'PLAN-TEXT';
const TASK_ADD = 'TASK-ADD';
const DEL_TASK = 'DEL-TASK';

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
        this._state.weekTask.day[0] = this._state.dayWeek[2][0];
        this._state.weekTask.day[1] = this._state.dayWeek[2][1];
        this._state.weekTask = taskDayReducer(this._state.weekTask, action); 

        this._rerender(); 
    },

    subscribe(observer) {
        this._rerender = observer;
    }

}

export const actionDayStart = e => ({ type: DAY_START, e });
export const actionPlanText = e => ({ type: PLAN_TEXT, e });
export const actionTaskAdd = weekN => ({ type: TASK_ADD, weekN });
export const actionDelTask = e => ({ type: DEL_TASK, e });


export default store;
window.store = store;