import {createStore} from 'redux';
import {mainReducer} from '../reducers/reducer';

export const store = createStore(mainReducer);