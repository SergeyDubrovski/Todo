const WEEK_START = 'WEEK-START';
const DAY_START = 'DAY-START';
const stateDefoult = [
    ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
    ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    [],
    0
];

export const dayStartReducer = (state = stateDefoult, action) => {
console.log(state);
    switch (action.type) {

        case WEEK_START:
            (action.weekN === 'week1' ? state[3] = 0 : state[3] = 1);
            console.log(state[3]);
            return [...state];
        
            case DAY_START:

            return [state[0], state[1], [state[0][action.body],state[1][action.body]], state[3]];
            
        default: return state;
    }
}
export const actionWeekStart = weekN => ({ type: WEEK_START, weekN }); 
export const actionDayStart = body => ({ type: DAY_START, body });
