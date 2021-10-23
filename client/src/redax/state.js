let rerender = () => {
    console.log('State');
}

const state = {
    dayWeek: [[
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресение'
    ],
    [
        'mon',
        'tue',
        'wed',
        'thu',
        'fri',
        'sat',
        'sun'
    ]],

    day: [],
    text: '',

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
    state.day[0] = state.dayWeek[0][e.target.id];
    state.day[1] = state.dayWeek[1][e.target.id];

    rerender();
}
export const planText = (e) => {
    state.text = e.target.value;
    rerender();
}
export const textAdd = () => {
    state.week1[state.day[1]].push(state.text);
    state.text = '';
    rerender(); 
}
export let subscribe = (observer) => {
    rerender = observer;
}

export default state;