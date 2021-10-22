let rerender = () => {
    console.log('State');
}

const state = {
    dayWeek: ['понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресение'
    ],
    dayWeekEng: [
        'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun'
    ], 

    day:'',

    week1: {
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
        sun: []
    },
    week2: {
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
        sun: []
    },
};
export const dayStart = (e) => {
    state.day = state.dayWeek[e.target.id]; 
    
    rerender(); 
}
export let subscribe = (observer) => {
    rerender = observer;
}

export default state;