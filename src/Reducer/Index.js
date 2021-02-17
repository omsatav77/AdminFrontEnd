import { combineReducers } from 'redux'
import Ui_Reducer from './UI_Reducer';
import Org_Reducer from './Org_Reducer';
import RoleReducer from './RoleReducer';

const allreducers = combineReducers({
    Ui_Reducer,RoleReducer,Org_Reducer
   
});
export default allreducers;