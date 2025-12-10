import { useState, useEffect } from "react"
import { getCharacter, getDeck } from "../../functions/data";
import type { card } from "../../type";
import BattleCard from "./BattleCard";
import { generateCard, generateQuestion, manaUsage, randomInt, solveQuestion, truncate } from "../../functions/util";
import * as math from "mathjs";
export default function Battle(props: any){
    const [hp, setHp] = useState(getCharacter().maxHp);
    const [cards, setCards] = useState<card[]>([]);
    const [currentCard, setCurrentCard] = useState(null);
    const [mana, setMana] = useState(50);
    const [tick, setTick] = useState(0);
    const [enemyHp, setEnemyHp] = useState(props.enemy.maxHp);
    const [enemyMana, setEnemyMana] = useState(50);
    const [enemyTick, setEnemyTick] = useState(props.enemy.cardSpeed);
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
        let currentEnemyTick = enemyTick + update;
        // setTick(prevTick => prevTick + update);
        let temp = cards;
        while(currentTick > getCharacter().cardSpeed){
          currentTick-=getCharacter().cardSpeed;
          let card = getDeck()[randomInt(7)];
          card.question = generateQuestion(card);
          temp.push(card);
        }
        while(currentEnemyTick > props.enemy.cardSpeed){
          currentEnemyTick-=props.enemy.cardSpeed;
          console.log("Enemy attack");
          cardResult(props.enemyCard,true,false);
        }
        setTick(currentTick);
        setEnemyTick(currentEnemyTick);
        setCards(temp);
        setDeltaTime(delta);
        setLastFrame(Date.now());
      }, 1000); // Update every second


      // Cleanup function
      return () => clearInterval(timerId);
    }, [mana,tick,cards,lastFrame,deltaTime,enemyTick,enemyMana]);


    const playCard = (cardPlayed : card) => {
      let response = prompt('Solve the question provided. ' + cardPlayed.question.name);
      if(response!=null){
        let answer = solveQuestion(cardPlayed.question);
        let success;
        if(answer.toString().includes('x')){
          success = math.symbolicEqual(math.parse(response),math.parse(answer));
        } 
        else{
          success = math.compare(truncate(response),truncate(answer))==0;//placeholder
        }
        cardResult(cardPlayed, success);
      }
    }
    const cardResult = (cardPlayed : card, success: boolean, player : boolean = true) => {
      if(success){
        if(player){
          setMana(prevMana => prevMana-manaUsage(cardPlayed));
        }
        else{
          setEnemyMana(prevMana => prevMana-manaUsage(cardPlayed));
        }
        if(cardPlayed.effect=="damage" || cardPlayed.effect=="heal"){
          let damage = cardPlayed.effectMultiplier * Math.pow(1.1,cardPlayed.difficulty-1);
          if(player){
            if(cardPlayed.effect=="damage"){
              setEnemyHp(prevHp => prevHp - damage); 
              if(enemyHp-damage <= 0){
                setEnemyHp(0);
                props.finishBattle(true);
              }
            }
            else{
              setHp(prevHp => prevHp + damage);
              if(hp+damage > getCharacter().maxHp){
                setHp(getCharacter().maxHp);
              }
            }
          }
          else{
            setHp(prevHp => prevHp - damage);
            if(hp-damage <= 0){
              setHp(0);
              props.finishBattle(false);
            }
          }
        }
        if(player){
          alert("Card used successfully!");
        }
      }
      else{
        setMana(prevMana => prevMana-manaUsage(cardPlayed)/2);
        alert("Card failed! Card and mana has been consumed! Answer was: " + truncate(solveQuestion(cardPlayed.question)));
      }
      if(player){
        let temp = cards;
        temp.splice(temp.findIndex(card => card==cardPlayed),1);
        setCards(temp);
      }
    }
   
    return(
        <>
            <div style={{ backgroundImage: `url(/images/${props.enemy.name}.png)`}}
            className={`h-screen w-screen bg-[url('../../../images/${props.enemy.name}.png')] bg-contain bg-no-repeat bg-center`}>
                hp: {truncate(hp)}
                <br />
                mana: {truncate(mana)}
                <br />
                enemy hp: {truncate(enemyHp)}
                <br />
                seconds until next card: {getCharacter().cardSpeed-tick}
                {cards.map((card,index) => <BattleCard key = {index} index = {cards.length/2-index} card = {card} playCard={playCard} mana={mana}></BattleCard>)}
            </div>
        </>
    )
}

