const Ui_Reducer=(state="login",action)=>{

    switch(action.type){
        case 'login':
        return "login";
        case 'home':
            return "home";
            
           default:
           return state; 

    }
}
export default Ui_Reducer;