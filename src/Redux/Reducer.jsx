
import { SET_FILTER_TEXT } from "./Type"

const initialState={
    studentList:[],
    filterText:""
}
    

// eslint-disable-next-line no-unused-vars
const reducer=(state=initialState,action)=> {
const {type,payload}=action
switch (type) {
    case SET_FILTER_TEXT:
        return {
            ...state,
            filterText:payload
        };
    default:
        return state;
}
}
export default reducer;