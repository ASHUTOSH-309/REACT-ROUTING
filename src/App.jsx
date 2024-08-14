

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { Landing } from './pages/Landing'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>

          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/"} element={<Landing />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
