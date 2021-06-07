import React from 'react';
import Login from "./Login"
import  { useSelector} from "react-redux";
import { selectUser } from './Reducer/userReducer';
import Logout from './Logout';
function App() {
  const user=useSelector(selectUser);

  return (
    
   <>
   {user?<Logout/>:<Login/>}


   </>
  );
}

export default App;
