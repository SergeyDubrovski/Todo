const WEEK_START = 'WEEK-START';
const DAY_START = 'DAY-START';
const GET_LIST = 'GET-LIST';
const PLAN_TEXT = 'PLAN-TEXT';
const TASK_ADD = 'TASK-ADD';
const DEL_TASK = 'DEL-TASK';
const initialState = {
    task: [
        ['mon', 'понедельник', [], []],
        ['tue', 'вторник', [], []],
        ['wed', 'среда', [], []],
        ['thu', 'четверг', [], []],
        ['fri', 'пятница', [], []],
        ['sat', 'суббота', [], []],
        ['sun', 'воскресение', [], []]
    ],
    text: '',
    weekStart: 0,
    day: 0
}
export const taskDayReducer = (state = initialState, action) => {

    switch (action.type) {

        case WEEK_START:
            return { ...state };

        case DAY_START:
            return { ...state };

        case GET_LIST:
            return { ...state, task: { ...action.getList } };

        case PLAN_TEXT:
            return { ...state, text: action.planText };

        case TASK_ADD:

            return {
                ...state, task: state.task.map((value, index) => {

                    if (index === action.taskAdd[0])
                        value[action.taskAdd[1]] = [...value[action.taskAdd[1]], state.text];

                    return value

                }), text: ''
            }

        case DEL_TASK:

            return { ...state, ...state.task[state.day][state.weekStart + 2].splice(action.delTask, 1) }

        default: return state
    }
}

export const getList = getList => ({ type: GET_LIST, getList });
export const planText = planText => ({ type: PLAN_TEXT, planText });
export const taskAdd = taskAdd => ({ type: TASK_ADD, taskAdd });
export const delTask = delTask => ({ type: DEL_TASK, delTask });
