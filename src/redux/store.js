import {createStore} from 'redux';
import rootRuducer from './rootReducer';
const store = createStore(rootRuducer);

export default store;