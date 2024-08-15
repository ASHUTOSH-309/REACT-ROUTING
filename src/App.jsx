

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { Landing } from './pages/Landing'

function App() {



  return (
    <>



      <BrowserRouter>
        <AppBar />
        <Routes>

          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/"} element={<Landing />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}


function AppBar() {
//useNavigate can only be used inside a component that is wrapped in Browser Router
  const navigate = useNavigate()
  return <div>
    <div>
      <button onClick={() => {navigate("/")}}>Landing</button>
      <button onClick={() => {navigate("/dashboard")}} >Dashboard</button>
    </div>
  </div>
}

export default App
