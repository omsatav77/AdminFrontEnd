export const LoginA=()=>
{
    return{
        type:"login"
    };
} ;

export const HomeA=()=>
{
    return{
        type:"home"
    };
} ;

export const RollA=(data)=>
{
    
    return{
        type:"RoleList",
        res:data,
    };
} ;

export const OrgA=(data)=>
{
    
    return{
        type:"OrgList",
        res:data,
    };
} ;