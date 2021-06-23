import { combineReducers } from 'redux';
import getItemlist from './getItemlist';

const rootReducer = combineReducers({ getItemlist });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
