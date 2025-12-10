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
  const charactersInfo = [
    {name: "Calculus Cat", description: "Your average wizard cat", maxHp: 10, manaRegen: 3, cardSpeed: 30},
    {name: "", description: "This cat raised it's health stat in fear of harm", maxHp: 15, manaRegen: 2, cardSpeed: 45}
  ];
  const cardsInfo = [
    {topic: "Limits", effectMultiplier: 1, manaUsage: 10}
  ];
  useEffect(() =>{
    defaultState();
  },[]);
  const defaultDeck = () => {
    let deck = new Array(8);
    deck.fill({});
    return deck.map(() =>{
      return {
        topic: cardsInfo[0].topic, effect: "damage", difficulty: 1, effectMultiplier: cardsInfo[0].effectMultiplier, manaUsage: cardsInfo[0].manaUsage, question: null
      };
    });
  }
  const defaultState = () => {
    // if(localStorage.getItem("Character")==null){
      localStorage.setItem("Character",JSON.stringify({name: "Testing Cat", level: 1, levelPoints: 0, maxHp: 10, manaRegen: 3, cardSpeed: 10, unlocked: true}));
    // }
    // if(localStorage.getItem("Currency")==null){
      localStorage.setItem("Currency", "0");
    // }
    // if(localStorage.getItem("Characters")==null){
      localStorage.setItem("Characters",JSON.stringify(
        charactersInfo.map(character => {
          return {
            name: character.name, level: 1, levelPoints: 0, maxHp: character.maxHp, manaRegen: character.manaRegen, cardSpeed: character.cardSpeed, unlocked: false
          };
        })
      ));
      localStorage.setItem("Deck",JSON.stringify(
        defaultDeck()
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
