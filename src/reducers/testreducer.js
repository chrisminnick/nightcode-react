import { TEST } from '../actions/actions';

export default function(state = {test:"default value of test"},action){
    switch (action.type) {
        case TEST: 
            return {test:action.payload};
            break;
    }
    return state;
}