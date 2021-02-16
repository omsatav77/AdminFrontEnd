import React, { useState } from 'react'

export const Organizational_unit = () => {
    const [OrgName, setOrgName] = useState("");
    const [OrgSize, setOrgSize] = useState();
   
    return (
        <>
        <div className="App mt-auto" > 
<form className=' bgimg  ffont'>
<h1 className="text-white " >Login Page </h1>
<table align="center" >
<tr>
<td><h4 className="text-white">OrgName</h4></td>
<td>
<input type="text"   name="t1"  className="bradios"
autoFocus="true"
value={OrgName}
onChange={(e)=>{setOrgName(e.target.value)}}
/>
</td>
</tr>
<tr>
<td><h4 className="text-white">Size Of Organation Unit</h4></td>
<td><input type="text" className="bradios"
value={OrgSize}
onChange={(e)=>{setOrgSize(e.target.value)}}
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
  </>    )
}
