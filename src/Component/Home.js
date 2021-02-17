import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import { LoginA } from '../Action/Index'
import { Employee } from './Employee'
import { Organizational_unit } from './Organizational_unit'
import { Roles } from './Roles'

export const Home = () => {
    const dispatch = useDispatch();
    return (
        <>
         <BrowserRouter >
            <navbar className="navbar navbar-expand-lg navbar-primary bg-light" >
            <NavLink className="btn  btn-third btn-outline-white" to="/">Employee   </NavLink>
            <NavLink className="btn  btn-third btn-outline-white" to="/Roles">Roles </NavLink>
            <NavLink className="btn  btn-third btn-outline-white" to="/Organizational_unit">Organizational_unit</NavLink>
        
                        <input type="button" className="btn  btn-third btn-outline-white  ml-auto "
               value="Logout"
              onClick={()=>{dispatch(LoginA())}} 
              />
            </navbar> 
           
            <Switch >
                <Route exact path="/" component={Employee}></Route>
                <Route  path="/Roles" component={Roles}></Route>
                <Route  path="/Organizational_unit" component={Organizational_unit}></Route>
            </Switch>
            </BrowserRouter>
        </>
    )
}
