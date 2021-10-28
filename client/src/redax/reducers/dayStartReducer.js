const DAY_START = 'DAY-START';
const stateDefoult = [
        ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
        ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        []       
    ];
    
export const dayStartReducer = (state = stateDefoult, action) => {
    
    switch (action.type) {
        
        case DAY_START:
            let stateCopy = {...state};
            stateCopy[2][0] = stateCopy[0][action.body];
            stateCopy[2][1] = stateCopy[1][action.body];
               
            return stateCopy;

        default: return state;
    }
}
export const actionDayStart = body => ({ type: DAY_START, body }); 
