import { ActionTypes } from "../contants/action-types"
const initialState = {
  step: 1,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber : '',
  isUSABased: false,
  gitProfile:'',
  bio: '',
  userCv:null,
  userCoverLetter :null

}

const  formDataReducer = (state=initialState,addFormData) =>{
  switch (addFormData.type){
    case ActionTypes.ADD_FORM_DATA:
        return {
           ...state,
           [addFormData.input]:addFormData.value
        }
    default:
        return state
  }
}

export default formDataReducer