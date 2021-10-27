const DAY_START = 'DAY-START';
const stateDefoult = [
        ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
        ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        []       
    ];
export const dayStartReducer = (state = stateDefoult, action) => {
    
    switch (action.type) {
        
        case DAY_START:
            state[2][0] = state[0][action.e.target.id];
            state[2][1] = state[1][action.e.target.id];
            
            return state;

        default: return state;
    }
}
export const actionDayStart = e => ({ type: DAY_START, e }); 
