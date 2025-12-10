import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import Collection from './components/collection/Collection'
import BattleSelect from './components/battle/BattleSelect'
import Campaign from './components/battle/Campaign'
import Instructions from './components/instructions/Instructions'
import './App.css'
import { getCardsInfo, getCharacters, getCharactersInfo, setStage } from './functions/data';
import { useEffect } from 'react'
import Endless from './components/battle/Endless'

function App() {
  const charactersInfo = getCharactersInfo();
  const cardsInfo = getCardsInfo();
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
    if(localStorage.getItem("Currency")==null){
      localStorage.setItem("Currency", "0");
    }
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
    // if(localStorage.getItem("Character")==null){
      localStorage.setItem("Character",JSON.stringify(getCharacters()[0]));
    // }
    setStage(1);
  }
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/collection' element={<Collection />}></Route>
              <Route path='/battleSelect' element={<BattleSelect />}></Route>
              <Route path='/campaign' element={<Campaign/ >}></Route>
              <Route path='/instructions' element={<Instructions />}></Route>
              <Route path='/endless' element={<Endless />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
