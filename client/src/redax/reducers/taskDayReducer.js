const WEEK_START = 'WEEK-START';
const DAY_START = 'DAY-START';
const GET_LIST = 'GET-LIST';
const PLAN_TEXT = 'PLAN-TEXT';
const TASK_ADD = 'TASK-ADD';
const DEL_TASK = 'DEL-TASK';
const initialState = {
    task: {
        mon: [[], []],
        tue: [[], []],
        wed: [[], []],
        thu: [[], []],
        fri: [[], []],
        sat: [[], []],
        sun: [[], []]
    },

    text: '',
    weekN: 0,
    day: ['', '']
}
export const taskDayReducer = (state = initialState, action) => {

    let stateCopy = { ...state };

    switch (action.type) {

        case WEEK_START:
            return { ...state };

        case DAY_START:
            return { ...state, day: [...state.day] };

        case GET_LIST:
            return { ...state, task: {...action.list} };

        case PLAN_TEXT:
            return { ...state, text: action.body };

        case TASK_ADD:
            stateCopy.weekN = action.weekN;
            stateCopy.task[state.day[0]][action.weekN].push(state.text);
            stateCopy = { ...state, day: [action.day, action.day1], text: '' };

            return stateCopy

        case DEL_TASK:
            stateCopy = { ...state, day: [action.day, action.day1] };
            stateCopy.task[state.day[0]][state.weekN].splice(action.e - 100, 1);
            return stateCopy

        default: return state
    }
}

export const actionGetList = list => ({ type: GET_LIST, list });
export const actionPlanText = body => ({ type: PLAN_TEXT, body });
export const actionTaskAdd = (weekN, day, day1) => ({ type: TASK_ADD, weekN, day, day1 });
export const actionDelTask = (e, day, day1) => ({ type: DEL_TASK, e, day, day1 });
