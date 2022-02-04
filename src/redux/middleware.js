
const forbidden = [ 
    'fuck',
    'shit',
    'ass',
    'bitch'
]

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            // Do stuff before the action gets dispatched
            if (action.type === 'CREATE_POST') {
                //const foundWord = action.payload.title.includes(forbidden);
                const foundWord = forbidden.filter(word => action.payload.title.includes(word)).length > 0;
                if (foundWord) {
                    dispatch({ type: 'SHOW_ALERT', payload: { type: 'danger', text: 'Bad word detected' } });
                    return;
                }
            }
            // Do stuff after the action gets dispatched
            next(action);
        };
    };
}