import { useState, useEffect } from "react"
import { getCharacter, getDeck } from "../../functions/localStorage";
import type { card } from "../../type";
import BattleCard from "./BattleCard";
export default function Battle(props: any){
    // const [hp, setHp] = useState(JSON.parse(localStorage.getItem("Character")).maxHp);
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);
    const [mana, setMana] = useState(0);
    const [tick, setTick] = useState(300);
    const [enemyHp, setEnemyHp] = useState(props.enemyMaxHp);
    const [enemyMana, setEnemyMana] = useState(props.enemyMana);
    useEffect(() => {
      const timerId = setInterval(() => {
        setMana(prevMana => prevMana + getCharacter().manaRegen);
        if(mana + getCharacter().manaRegen > 100){
          setMana(100);
        }
        setTick(prevTick => prevTick + 1);
        if(tick + 1 > getCharacter().cardSpeed){
          setTick(0);
          let temp = cards;
          temp.push(getDeck()[0]);//just for now
          setCards(temp);
        }
      }, 1000); // Update every second

      // Cleanup function
      return () => clearInterval(timerId);
    }, [mana,tick,cards]);

    const playCard = (cardPlayed : card) => {
      
    }
    const cardResult = (cardPlayed : card, success: boolean) => {
      if(success){
        setMana(prevMana => prevMana-cardPlayed.manaUsage * Math.pow(1.1,cardPlayed.difficulty-1));
        if(cardPlayed.effect=="Damage"){
          setEnemyHp(prevHp => prevHp - cardPlayed.effectMultiplier * Math.pow(1.1,cardPlayed.difficulty-1));
        }
      }
      else{
        setMana(prevMana => prevMana-cardPlayed.manaUsage * Math.pow(1.1,cardPlayed.difficulty-1) / 2);
      }
    }
    
    return(
        <>
            <div className='h-screen w-screen bg-[url(../../../vite.svg)] bg-contain bg-no-repeat bg-center'>{/*Enemy*/}
                {mana}
                {cards.map((card,index) => <BattleCard key = {index} index = {cards.length/2-index} card = {card}></BattleCard>)}
            </div>
        </>
    )
}