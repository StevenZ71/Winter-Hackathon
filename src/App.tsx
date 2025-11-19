import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import Collection from './components/collection/Collection'
import Battle from './components/battle/Battle'
import './App.css'
import NavBar from './components/containers/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/collection" element={<Collection />}></Route>
              <Route path="/battle" element={<Battle />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
