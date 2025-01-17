
import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard"
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>} />
    </Routes>

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
