const DAY_START = 'DAY-START';
const PLAN_TEXT = 'PLAN-TEXT';
const TASK_ADD = 'TASK-ADD';
const DEL_TASK = 'DEL-TASK';

let store = {
    _state: {
        dayWeek: [
            ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
            ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        ],

        day: [],
        text: '',
        weekN: 0,

        weekTask: {
            mon: [[], []],
            tue: [[], []],
            wed: [[], []],
            thu: [[], []],
            fri: [[], []],
            sat: [[], []],
            sun: [[], []]
        }
    },

    getState() {
        return this._state
    },
    _rerender() {
        console.log('State');
    },
    dispatch(action) {
        switch (action.type) {
            case DAY_START:
                this._state.day[0] = this._state.dayWeek[0][action.e.target.id];
                this._state.day[1] = this._state.dayWeek[1][action.e.target.id];
                this._rerender();
                break;
            
                case PLAN_TEXT:
                this._state.text = action.e.target.value;
                this._rerender();
                break;
            
                case TASK_ADD:
                this._state.weekTask[this._state.day[1]][action.weekN].push(this._state.text);
                this._state.text = '';
                this._rerender();
                break;

            case DEL_TASK:
                this._state.weekTask[this._state.day[1]][this._state.weekN].splice(action.e.target.id-100, 1); 
                this._rerender(); 
                break;

            default:
                break;
        }
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