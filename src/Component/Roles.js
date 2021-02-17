import React, { useEffect, useState } from 'react'


export const Roles = () => {
    const [RoleName, setRoleName] = useState("");
    const [Name, setName] = useState([]);
    const [Desc, setDesc] = useState("");
    var index=1;


    var roles=[{role:"manager",desc:"its Manager"},{role:"manager2",desc:"its manager2"}]
    localStorage.setItem("roles",JSON.stringify(roles));
    var datas = localStorage.getItem('roles');
    console.log(roles);
    var arr= JSON.parse(datas);
    
    useEffect(() => {
      
      setName(arr)

    }, [])

    const AddRole=(e)=>
    {
      e.preventDefault();

      if(RoleName===""|| Desc==="")
      {
        alert("fields should not be empty");
        return false;
      }
      alert(RoleName+" "+ Desc);
      var role={
        role:""+RoleName,
        desc:""+Desc
      }

      roles.push(role);
      // localStorage.setItem("roles",JSON.stringify(roles));
      // console.log(r oles);
      // var datas = localStorage.getItem('roles');
      // var arr= JSON.parse(datas);
      setName(arr)
      console.log(arr)

  const values = arr.map(officer => officer.role);
  console.log(values)
  
  // dispatch 

    }
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
      onClick={AddRole}
      >Add Role </button></td>
            </tr>
  </table>
  <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>Role id</th>
                                <th>Role name</th>
                                <th>Description</th>
                                <th>Action</th>


                                
                            </tr>



                        </thead>
                        <tbody>
                        {
                           
                           Name.map(
                            Org =>
                                   <tr key={Org.id}>
                                   <td>{index++}</td>
                                       <td>{Org.role}</td>
                                       <td>{Org.desc}</td>

                                       <td>
                                           <button style={{ marginLe00ft: "10px"}} 
                                           // onClick={()=> this.deleteEmployee(rol.id)}
                                            className="btn btn-danger">Delete</button></td>



                                   </tr>
                           )
                       }
                        </tbody>

                    </table>
</form>
</div>
        </>
    )
}
