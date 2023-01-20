import {combineReducers} from 'redux'
import {formDataReducer} from './formReducer'


const reducers = combineReducers({
    userInfo : formDataReducer

})

export default reducers