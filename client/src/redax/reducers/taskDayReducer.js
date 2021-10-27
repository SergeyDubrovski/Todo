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
    day: [0] 
} 
export const taskDayReducer = (state = weekTaskDefoult, action) => {
    switch (action.type) {
              
            case PLAN_TEXT:
            state.text = action.e.target.value;
            return state 
        
            case TASK_ADD:
            state.day[0] = action.day;    
            state[state.day[0]][action.weekN].push(state.text);
            
            state.text = '';
            return state  

        case DEL_TASK:
            state.day[0] = action.day;  
            state[state.day[0]][state.weekN].splice(action.e.target.id-100, 1); 
            return state  

        default:  return state  
    }   
}
export const actionPlanText = e => ({ type: PLAN_TEXT, e });
export const actionTaskAdd = (weekN, day) => ({ type: TASK_ADD, weekN, day });
export const actionDelTask = (e, day) => ({ type: DEL_TASK, e, day }); 

