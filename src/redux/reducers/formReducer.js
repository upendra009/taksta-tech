import { ActionTypes } from "../contants/action-types"

const initialState = {
    userInfo : {}
}
export const  formDataReducer = (state=initialState,{type,payload}) =>{
  switch (type){
    case ActionTypes.SET_FORM_DATA:
        return state;
    default:
        return state
  }
}