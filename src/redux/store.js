import formDataReducer from './reducers/formReducer'
import {configureStore} from '@reduxjs/toolkit'
 
export const store = configureStore({
    reducer: {
    userData : formDataReducer    
    }
  })
export default store; 
