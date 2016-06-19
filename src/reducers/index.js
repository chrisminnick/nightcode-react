const initialState = {
    cost:50,
    number:20,
    initial:1000,
    increment:100
};

const swimCalc = (state = initialState, action) => {

    
    switch (action.type) {
        case 'CHANGE_COST':
            return {
                ...state,
                cost: action.value
            };
        case 'CHANGE_NUMBER':
            return {
                ...state,
                number: action.value
            };
        case 'CHANGE_INITIAL':
            return {
                ...state,
                initial: action.value
            };
        case 'CHANGE_INCREMENT':
            return {
                ...state,
                increment: action.value
            };

        default:
            return state
    }
};


export default swimCalc;