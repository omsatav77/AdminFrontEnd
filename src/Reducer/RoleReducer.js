

const INIT_STATE = {
    roleArr: ["abc","pqr"],
  }
const RoleReducer=(state=INIT_STATE,action)=>{

        switch(action.type){
            case "RoleList":
                return {  ...state,
                roleArr: action.res}
            // return  action.res;
               default:
               return state; 
    
        }
    }
    export default RoleReducer;