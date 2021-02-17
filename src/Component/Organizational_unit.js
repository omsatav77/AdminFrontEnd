import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { OrgA } from '../Action/Index';

export const Organizational_unit = () => {
    const [OrgName, setOrgName] = useState("");
    const [OrgSize, setOrgSize] = useState();
    const [OrgArr, setOrgArr] = useState([]);
    const dispatch = useDispatch();
    var index=1;
    var Orgs=[{org:"sw1",unit:50},{org:"sw2",unit:5}]
    useEffect(() => {
      
      localStorage.setItem("orgs",JSON.stringify(Orgs));
      var datas = localStorage.getItem('orgs');

          var arr= JSON.parse(datas);
          console.log(arr)
          setOrgArr(arr);
      
    }, [])


    const AddOrg=(e)=>
    {
      e.preventDefault();

      if(OrgName===""||OrgSize==="")
      {
        alert("should not be empty");
        return false;
      }
      if(!Number(OrgSize))
      {
        alert("should  be NUMBER");
        return false;

      }
      
      var orgobj={
        org:""+OrgName,
        unit:""+OrgSize
      }

      Orgs.push(orgobj);
      localStorage.setItem("orgs",JSON.stringify(Orgs));
      var datas = localStorage.getItem('orgs');

          var arr= JSON.parse(datas);
          console.log(arr)
          setOrgArr(arr);
      const values = arr.map(officer => officer.org);
      console.log(values);
      dispatch(OrgA(values));
      // dispatch 
    }
   
    return (
        <>
        <div className="App mt-auto" > 
<form className='ffont'>
<h1 className="text-white " > Organizatinal Page </h1>
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
  onClick={AddOrg}
>Add_Org </button></td>
      </tr>
</table>
<table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>Org_id</th>
                                <th>Org_Name</th>
                                <th>Org_Size</th>
                                <th>Action</th>


                                
                            </tr>



                        </thead>
                        <tbody>
                        {
                           
                           OrgArr.map(
                            Org =>
                                   <tr key={Org.id}>
                                   <td>{index++}</td>
                                       <td>{Org.org}</td>
                                       <td>{Org.unit}</td>

                                       <td>
                                           <button style={{ marginLe00ft: "10px"}} 
                                          //  onClick={deleteEmployee(Org.org)}
                                            className="btn btn-danger">Delete</button></td>



                                   </tr>
                           )
                       }
                        </tbody>

                    </table>
</form>
</div>
  </>    )
}
