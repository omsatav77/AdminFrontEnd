import React, { useState } from 'react'

export const Roles = () => {
    const [RoleName, setRoleName] = useState("");
    const [Desc, setDesc] = useState("");
   
    return (
        <>
              <div className="App mt-auto" > 
<form className=' bgimg  ffont'>
  <h1 className="text-white " >Role Page </h1>
  <table align="center" >
  <tr>
    <td><h4 className="text-white">RoleName</h4></td>
    <td>
    <input type="text"   name="t1"  className="bradios"
    autoFocus="true"
  value={RoleName}
   onChange={(e)=>{setRoleName(e.target.value)}}
   />
    </td>
    </tr>
    <tr>
      <td><h4 className="text-white">Desciption</h4></td>
      <td><input type="text" className="bradios"
  value={Desc}
  onChange={(e)=>{setDesc(e.target.value)}}
   /> </td>
      </tr>
      <br/>
    <tr>
      <td colSpan="2"><button 
      className="btn btn-primary bbtn" 
    //   onClick={onLogin}
      >login </button></td>
            </tr>
  </table>
</form>
</div>
        </>
    )
}
