const Org_Reducer=(state=[],action)=>{

    switch(action.type){
        case "OrgList":
        return  action.res;
           default:
           return state; 

    }
}
export default Org_Reducer;