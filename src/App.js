import './App.css';
import { useSelector } from 'react-redux'
import { Home } from './Component/Home';
import { Login } from './Component/Login';
function App() {
  const Uipage=useSelector(state=>state.Ui_Reducer);
  return (
    <div className="App">
    
    {Uipage==="home"&& <Home/> }
      {Uipage==="login"&&<Login/>}
    </div>
  );
}

export default App;
