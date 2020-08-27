import { createStore, compose } from 'redux';
import CombinedReducers from '../Reducer/index';


const composeEnhancer = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null || compose;
export const store = createStore(CombinedReducers, composeEnhancer);
export const dispatchAction = store.dispatch;