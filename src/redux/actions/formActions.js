import { ActionTypes } from "../contants/action-types"

export const addFormData = (input,value)=> {
    return {
        type : ActionTypes.ADD_FORM_DATA,
        input,
        value
}
}