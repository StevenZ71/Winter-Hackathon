import { useState, useEffect } from "react"
import { getCharacter, getDeck } from "../../functions/localStorage";
import type { card } from "../../type";
import BattleCard from "./BattleCard";
import { generateQuestion, manaUsage, solveQuestion, truncate } from "../../functions/util";
import * as math from "mathjs";
export default function Battle(props: any){
    // const [hp, setHp] = useState(JSON.parse(localStorage.getItem("Character")).maxHp);
    const [cards, setCards] = useState<card[]>([]);
    const [currentCard, setCurrentCard] = useState(null);
    const [mana, setMana] = useState(50);
    const [tick, setTick] = useState(10);
    const [enemyHp, setEnemyHp] = useState(10);
    const [enemyMana, setEnemyMana] = useState(props.enemyMana);
    const [lastFrame, setLastFrame] = useState(Date.now());
    const [deltaTime, setDeltaTime] = useState(0);
    useEffect(() => {
      const timerId = setInterval(() => {
        setMana(prevMana => prevMana + getCharacter().manaRegen);
        if(mana + getCharacter().manaRegen > 100){
          setMana(100);
        }
        let delta = (Date.now() - lastFrame) / 1000 + deltaTime;
        let update = 0;
        while(delta >= 1){
          delta--;
          update++;
        }
        let currentTick = tick + update;
        // setTick(prevTick => prevTick + update);
        let temp = cards;
        while(currentTick > getCharacter().cardSpeed){
          currentTick-=getCharacter().cardSpeed;
          let card = getDeck()[0]; //just for now
          card.question = generateQuestion(card);
          temp.push(card);
        }
        setTick(currentTick);
        setCards(temp);
        setDeltaTime(delta);
        setLastFrame(Date.now());
      }, 1000); // Update every second

      // Cleanup function
      return () => clearInterval(timerId);
    }, [mana,tick,cards,lastFrame,deltaTime]);

    const playCard = (cardPlayed : card) => {
      let response = prompt('Solve the question provided. ' + cardPlayed.question.name);
      if(response!=null){
        let answer = solveQuestion(cardPlayed.question);
        const success = math.compare(truncate(response),truncate(answer))==0;//placeholder
        cardResult(cardPlayed, success);
      }
    }
    const cardResult = (cardPlayed : card, success: boolean) => {
      if(success){
        setMana(prevMana => prevMana-manaUsage(cardPlayed));
        if(cardPlayed.effect=="damage"){
          setEnemyHp(prevHp => prevHp - cardPlayed.effectMultiplier * Math.pow(1.1,cardPlayed.difficulty-1));
        }
        alert("Card used successfully!");
      }
      else{
        setMana(prevMana => prevMana-manaUsage(cardPlayed)/2);
        alert("Card failed! Card and mana has been consumed! Answer was: " + truncate(solveQuestion(cardPlayed.question)));
      }
      let temp = cards;
      temp.splice(temp.findIndex(card => card==cardPlayed),1);
      setCards(temp);
    }
    
    return(
        <>
            <div className='h-screen w-screen bg-[url(../../../vite.svg)] bg-contain bg-no-repeat bg-center'>{/*Enemy*/}
                mana: {mana}
                <br />
                enemy hp: {enemyHp}
                <br />
                seconds until next card: {getCharacter().cardSpeed-tick}
                {cards.map((card,index) => <BattleCard key = {index} index = {cards.length/2-index} card = {card} playCard={playCard} mana={mana}></BattleCard>)}
            </div>
        </>
    )
}