import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EstiloGlobal from './styles'
import CadastrarContato from './pages/CadastrarContato'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo" element={<CadastrarContato />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
