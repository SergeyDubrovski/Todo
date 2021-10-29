const DAY_START = 'DAY-START';
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
    day: ['',''] 
} 
export const taskDayReducer = (state = weekTaskDefoult, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        
        case DAY_START:
            stateCopy.day = [...state.day];
            return stateCopy 
         
            case PLAN_TEXT:
            stateCopy.text = action.body;
            return stateCopy   
        
            case TASK_ADD:
            stateCopy.day[0] = action.day; 
            stateCopy.day[1] = action.day1; 
            stateCopy[state.day[0]][action.weekN].push(state.text);
            
            stateCopy.text = '';
            return stateCopy  

        case DEL_TASK:
            stateCopy.day[0] = action.day;
            stateCopy.day[1] = action.day1;   
            stateCopy[state.day[0]][state.weekN].splice(action.e-100, 1); 
            return stateCopy 

        default:  return state  
    }   
}

export const actionPlanText = body => ({ type: PLAN_TEXT, body });
export const actionTaskAdd = (weekN, day, day1) => ({ type: TASK_ADD, weekN, day, day1});
export const actionDelTask = (e, day, day1) => ({ type: DEL_TASK, e, day, day1}); 
