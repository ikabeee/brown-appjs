import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login"

import Layout from "./layouts/Layout";

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
