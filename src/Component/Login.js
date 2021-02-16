import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { HomeA, LoginA } from '../Action/Index';


export const Login = () => {
    const [userName, setuserName] = useState("");
    const [userpass, setPassword] = useState("");
    const dispatch = useDispatch();

    const onLogin=(e)=>
  {
    e.preventDefault();
    if(userName==="" && userpass==="" ) 
    {
      alert("Enter username and password  for Admin");
      return false;
    }    
    if(userName.toLowerCase()==="admin"  && userpass.toLowerCase()==="admin" ) 
    {
      dispatch(HomeA());
      return true;
    }
    else
    {
        alert(`enter "admin" as userName and password `);
        dispatch(LoginA());
        return false;
    }
    


      
    }

  
  
    return (
        <>
              <div className="App mt-auto" > 
<form className=' bgimg  ffont'>
  <h1 className="text-white " >Login Page </h1>
  <table align="center" >
  <tr>
    <td><h4 className="text-white">UserName</h4></td>
    <td>
    <input type="text"   name="t1"  className="bradios"
    autoFocus="true"
  value={userName}
   onChange={(e)=>{setuserName(e.target.value)}}
   />
    </td>
    </tr>
    <tr>
      <td><h4 className="text-white">Password</h4></td>
      <td><input type="password" className="bradios"
  value={userpass}
  onChange={(e)=>{setPassword(e.target.value)}}
   /> </td>
      </tr>
      <br/>
    <tr>
      <td colSpan="2"><button 
      className="btn btn-primary bbtn" 
      onClick={onLogin}
      >login </button></td>
            </tr>
  </table>
</form>
</div>
        </>
    )
}
