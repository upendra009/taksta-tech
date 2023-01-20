import { ActionTypes } from "../contants/action-types"
export const SetFormData = (userInfo)=> {
    return {
        type : ActionTypes.SET_FORM_DATA,
        payload : userInfo
    }
}