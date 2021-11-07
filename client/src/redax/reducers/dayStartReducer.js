const WEEK_START = 'WEEK-START';
const DAY_START = 'DAY-START';
const initialState = {
    task: [
        ['mon', 'понедельник'],
        ['tue', 'вторник'],
        ['wed', 'среда'],
        ['thu', 'четверг',],
        ['fri', 'пятница',],
        ['sat', 'суббота'],
        ['sun', 'воскресение']
    ],
    dayStart: 0,
    weekStart: 0
}

export const dayStartReducer = (state = initialState, action) => {

    switch (action.type) {

        case WEEK_START:
            (action.weekStart === 'week1' ? state.weekStart = 0 : state.weekStart = 1);
            return { ...state, ...state.weekStart };

        case DAY_START:
            
            return ({ ...state, dayStart: action.dayStart })

        default: return state;
    }
}
export const weekStart = weekStart => ({ type: WEEK_START, weekStart });
export const dayStart = dayStart => ({ type: DAY_START, dayStart });
