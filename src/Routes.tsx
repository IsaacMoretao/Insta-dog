import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/index"
import { Loguin } from './pages/Loguin/Index';

function Rotas() {

  return (
    <Routes>
      <Route path="/istadog/" element={<Home />} />
      <Route path="/istadog/Loguin" element={<Loguin />} />
    </Routes>
  )
}

export default Rotas
