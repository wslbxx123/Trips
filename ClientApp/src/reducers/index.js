import {combineReducers} from 'redux';
import tripReducers from './tripReducers';

const rootReducers = combineReducers({
    trips: tripReducers
});

export default rootReducers;