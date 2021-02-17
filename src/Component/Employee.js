import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export const Employee = () => {
    
  const RoleList=useSelector(state=>state.RoleReducer);
  const OrgList=useSelector(state=>state.RoleReducer);


console.log(RoleList)   ;
     let RoleList2 = RoleList.length > 0
    	&& RoleList.map((item, i) => {
      return (
        <option key={i} value={item}>{item.Role}</option>
      )
    }, this);
    console.log(RoleList2);
    let OrgList2 = OrgList.length > 0
    && OrgList.map((item, i) => {
    return (
      <option key={i} value={item}>{item.Org}</option>
    )
  }, this);
    const [Ipdata, setIpdata] = useState({
      EmpName: "",
      Email: "",
      Role: "",
      Org: ""
    });
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const onAddEmp=(e)=>
    {
      e.preventDefault();
        if (
          Ipdata.EmpName === "" ||
          Ipdata.Email === "" ||
          Ipdata.Role === "" ||
          Ipdata.Org === ""
        ) 
        {
          alert("all fields mandotory");
          return false;
        } 
        let err;
        err = validEmailRegex.test(Ipdata.email) ? "" : "Email is not valid!";
        if (err !== "") {
          return false;
        }
    }
    

    const Onchange = (e) => {
      setIpdata({ ...Ipdata, [e.target.name]: e.target.value });
    };
 
    return (
        <div>
             <div className="App mt-auto" > 
<form className='ffont'>
  <h1 className="text-white " >Employee Page </h1>
  <table align="center" >
  <tr>
    <td><h4 className="">Emp_Name</h4></td>
    <td>
    <input type="text"   name="EmpName"  className="bradios"
    autoFocus="true"
  value={Ipdata.EmpName}
  onChange={Onchange}
   />
    </td>
    </tr>
    <tr>
      <td><h4 className="">Email_Id</h4></td>
      <td><input type="text" name="Email" className="bradios"
  value={Ipdata.Email}
  onChange={Onchange}
   /> </td>
      </tr>
      <tr>
      <td><h4 className="">Role</h4></td>
      <td>
        <select name="Role" className="bradios"
        style={{width:"100%"}}
        Onchange={Onchange}
        
        >
          {/* {RoleList2} */}


          <option value="Role1">Role1</option>
          <option value="role2">role2</option>
          <option value="role3">role3</option>
        </select>
   </td>
      </tr>
      <tr>
      <td><h4 className="">Orgnation</h4></td>
      <td>
        <select name="Org"
        className="bradios"
        style={{width:"100%"}}
        Onchange={Onchange}
        
        >
            {/* {OrgList2} */}
          <option value="val1">val1</option>
          <option value="val2">val2</option>
          <option value="val3">val3</option>
        </select>
   </td>
      </tr>
      <br/>
    <tr>
      <td colSpan="2"><button 
      className="btn btn-primary bbtn" 
      onClick={onAddEmp}
      >Add </button></td>
            </tr>
  </table>
  <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>Employee id</th>
                                <th> name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Organizational</th>
                                <th>Action</th>


                                
                            </tr>



                        </thead>
                        <tbody>
                        {/* {
                            this.state.employees.map(
                                emp =>
                                    <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                        <td>{emp.firstName}</td>

                                        <td><button onClick={()=> this.editEmployee(emp.id)} className="btn btn-info">Update</button>
                                            <button style={{ marginLeft: "10px"}} onClick={()=> this.deleteEmployee(emp.id)} className="btn btn-danger">Delete</button></td>



                                    </tr>
                            )
                        } */}
                        </tbody>

                    </table>
</form>
</div>
        </div>
    )
}
