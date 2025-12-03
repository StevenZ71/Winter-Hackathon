import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import Collection from './components/collection/Collection'
import BattleSelect from './components/battle/BattleSelect'
import Campaign from './components/battle/Campaign'
import Battle from './components/battle/Battle'
import Instructions from './components/instructions/Instructions'
import './App.css'
import { getCharacters } from './functions/localStorage';
import { useEffect } from 'react'

function App() {
  const characters = [
    {
      name: "Calculus Cat", description: "Your average wizard cat", maxHp: 10, manaRegen: 3, cardSpeed: 30
    }
  ];
  useEffect(() =>{
    defaultState();
  },[]);
  const defaultState = () => {
    // if(localStorage.getItem("Character")==null){
      localStorage.setItem("Character",JSON.stringify({name: "Calculus Cat", level: 1, levelPoints: 0, maxHp: 10, manaRegen: 3, cardSpeed: 30, unlocked: true}));
    // }
    // if(localStorage.getItem("Currency")==null){
      localStorage.setItem("Currency", "0");
    // }
    // if(localStorage.getItem("Characters")==null){
      localStorage.setItem("Characters",JSON.stringify(
        characters.map(character => {
          return {
            name: character.name, level: 1, levelPoints: 0, maxHp: character.maxHp, manaRegen: character.manaRegen, cardSpeed: character.cardSpeed, unlocked: false
          };
        })
      ));
      getCharacters()[0].unlocked = true;
    // }
  }
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
