
import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard"
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
