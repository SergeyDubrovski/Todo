const WEEK_START = 'WEEK-START';
const DAY_START = 'DAY-START';
const initialState = [
    ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
    ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    [],
    0
];

export const dayStartReducer = (state = initialState, action) => {

    switch (action.type) {

        case WEEK_START:
            (action.weekN === 'week1' ? state[3] = 0 : state[3] = 1);
            return [...state];

        case DAY_START:

            return ([state[0], state[1], [...state[2]] = [
            action.day, action.e], state[3]]);

        default: return state;
    }
}
export const actionWeekStart = weekN => ({ type: WEEK_START, weekN });
export const actionDayStart = (e, day) => ({ type: DAY_START, e, day });
