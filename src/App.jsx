import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Landing = React.lazy(() => import('./pages/Landing'))
const Dashboard = React.lazy(() => import('./pages/Dashboard'))

function App() {

  //Suspense API

  return (
    <>
      <BrowserRouter>
        <AppBar />

        <Suspense fallback={<div>Loading....</div>}>

          <Routes>
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route path={"/"} element={<Landing />} />
          </Routes>


        </Suspense>
      </BrowserRouter>
    </>
  )
}

function AppBar() {
  //useNavigate can only be used inside a component that is wrapped in Browser Router
  const navigate = useNavigate()
  return <div>
    <div>
      <button onClick={() => { navigate("/") }}>Landing</button>
      <button onClick={() => { navigate("/dashboard") }} >Dashboard</button>
    </div>
  </div>
}

export default App
