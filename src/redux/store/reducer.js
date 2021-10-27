import * as actionTypes from './actions';
const initialState={
    token:false
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.checkLoginUser:
            return{
                token:true
            }
        default:
            return false

    }

};



export default reducer;