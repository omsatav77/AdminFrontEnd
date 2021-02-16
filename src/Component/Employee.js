import React, { useState } from 'react'

export const Employee = () => {
    const [EmpName, setEmpName] = useState("");
    const [Email, SetEmail] = useState("");
    const [Role, SetRole] = useState("");
    const [Org, SetOrg] = useState("");
 
    return (
        <div>
             <div className="App mt-auto" > 
<form className='ffont'>
  <h1 className="text-white " >Employee Page </h1>
  <table align="center" >
  <tr>
    <td><h4 className="">Emp_Name</h4></td>
    <td>
    <input type="text"   name="t1"  className="bradios"
    autoFocus="true"
  value={EmpName}
   onChange={(e)=>{setEmpName(e.target.value)}}
   />
    </td>
    </tr>
    <tr>
      <td><h4 className="">Email_Id</h4></td>
      <td><input type="text" className="bradios"
  value={Email}
  onChange={(e)=>{SetEmail(e.target.value)}}
   /> </td>
      </tr>
      <tr>
      <td><h4 className="">Role</h4></td>
      <td><input type="text" className="bradios"
  value={Role}
  onChange={(e)=>{SetRole(e.target.value)}}
   /> </td>
      </tr>
      <tr>
      <td><h4 className="">Orgnation</h4></td>
      <td><input type="text" className="bradios"
  value={Org}
  onChange={(e)=>{SetOrg(e.target.value)}}
   /> </td>
      </tr>
      <br/>
    <tr>
      <td colSpan="2"><button 
      className="btn btn-primary bbtn" 
    //   onClick={onLogin}
      >Add </button></td>
            </tr>
  </table>
</form>
</div>
        </div>
    )
}
