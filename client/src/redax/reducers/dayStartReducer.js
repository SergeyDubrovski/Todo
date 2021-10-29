const DAY_START = 'DAY-START';
const stateDefoult = [
    ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
    ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    []
];

export const dayStartReducer = (state = stateDefoult, action) => {

    switch (action.type) {

        case DAY_START:

            return [state[0], state[1], [state[0][action.body], state[1][action.body]]];

        default: return state;
    }
}
export const actionDayStart = body => ({ type: DAY_START, body });
