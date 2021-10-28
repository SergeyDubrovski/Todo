const GET_DAY = 'GET-DAY';
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
    console.log(state);
    let stateCopy = {...state};
    switch (action.type) {
        
        case GET_DAY:
            stateCopy.day[0] = action.day; 
            stateCopy.day[1] = action.day1; 
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
            stateCopy[state.day[0]][state.weekN].splice(action.e.target.id-100, 1); 
            return state  

        default:  return state  
    }   
}
export const actionGetDay = (day, day1) => ({ type: GET_DAY, day, day1})
export const actionPlanText = body => ({ type: PLAN_TEXT, body });
export const actionTaskAdd = (weekN, day, day1) => ({ type: TASK_ADD, weekN, day, day1});
export const actionDelTask = (e, day, day1) => ({ type: DEL_TASK, e, day, day1}); 
