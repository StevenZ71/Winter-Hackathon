import { useState, useEffect } from "react"
import { getCharacter } from "../../functions/localStorage";
export default function Battle(props: any){
    // const [hp, setHp] = useState(JSON.parse(localStorage.getItem("Character")).maxHp);
    const [cards, setCards] = useState(props.cards);
    const [currentCard, setCurrentCard] = useState(null);
    const [mana, setMana] = useState(0);
    const [tick, setTick] = useState(0);
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
            //draw card
          }
        }, 1000); // Update every second

        // Cleanup function
        return () => clearInterval(timerId);
      }, [mana,tick]);
    return(
        <>
            <div className='h-screen w-screen bg-[url(../../../vite.svg)] bg-contain bg-no-repeat bg-center'>{/*Enemy*/}
                {mana}
            </div>
        </>
    )
}