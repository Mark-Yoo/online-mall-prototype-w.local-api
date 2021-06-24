import { combineReducers } from 'redux';
import getItemlist from './getItemlist';
import getOrderlist from './getOrderlist';

const rootReducer = combineReducers({ getItemlist, getOrderlist });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
