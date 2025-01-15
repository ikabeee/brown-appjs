import { Route, Routes } from "react-router";

import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login"
import { ComplexNavbar } from "./layouts/ComplexNavbar";


function App() {

  return (    
    <>
      <Routes>
        <Route element={<ComplexNavbar/>} >
          <Route index element={<Dashboard/>} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
