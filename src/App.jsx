
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
