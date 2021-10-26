const PLAN_TEXT = 'PLAN-TEXT';
const TASK_ADD = 'TASK-ADD';
const DEL_TASK = 'DEL-TASK'; 
const  weekTaskDefoult = {
    mon: [[], []],
    tue: [[], []],
    wed: [[], []],
    thu: [[], []],
    fri: [[], []],
    sat: [[], []],
    sun: [[], []],
    text: '',
    weekN: 0,
    day: [0,0] 
} 
export const taskDayReducer = (state = weekTaskDefoult, action) => {
    switch (action.type) {
              
            case PLAN_TEXT:
            state.text = action.e.target.value;
            return state 
        
            case TASK_ADD:
            state[state.day[1]][action.weekN].push(state.text);
            state.text = '';
            return state  

        case DEL_TASK:
            state[state.day[1]][state.weekN].splice(action.e.target.id-100, 1); 
            return state  

        default:  return state  
    }   
}

