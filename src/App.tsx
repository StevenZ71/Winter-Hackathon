import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import Collection from './components/collection/Collection'
import BattleSelect from './components/battle/BattleSelect'
import Campaign from './components/battle/Campaign'
import Battle from './components/battle/Battle'
import Instructions from './components/instructions/Instructions'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/collection' element={<Collection />}></Route>
              <Route path='/battleSelect' element={<BattleSelect />}></Route>
              <Route path='/campaign' element={<Campaign/ >}></Route>
              <Route path='/battle' element={<Battle />}></Route>
              <Route path='/instructions' element={<Instructions />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
