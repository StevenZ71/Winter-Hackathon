import { useState } from "react"
import NavBar from "../containers/NavBar/NavBar"
import Battle from "./Battle";
import { getCardsInfo, getCurrency, getStage, setCurrency, setStage } from "../../functions/data";
import { generateCard } from "../../functions/util";
import CampaignCard from "./CampaignCard";
export default function Campaign(){
    const [battling, setBattling] = useState(false);
    const [selected, setSelected] = useState(getStage());
    const getEnemy = () =>{
        // if(stage==0){
            return {name: "Calculus Cat", level: 1, levelPoints: 0, maxHp: 10, manaRegen: 3, cardSpeed: 10, unlocked: false};
        // }
    }
    const getCard = () =>{
        return generateCard(getCardsInfo()[selected]);
    }
    const finishBattle = (win : boolean) =>{
        if(win){
            alert("You win!");
            if(getStage() < getCardsInfo().length-1){
                setStage(getStage() + 1);
            }
            setCurrency(getCurrency() + selected);
        }
        else{
            alert("You lose!");
        }
        setBattling(false);
    }
    const selectStage = (stage : number) =>{
        setSelected(stage);
        setBattling(true);
    }
    let list = [];
    for(let i = 1; i < getCardsInfo().length-1; i++){
        list.push(i);
    }
    return(
        <>
            {battling ? <Battle enemy={getEnemy()} enemyCard={getCard()} finishBattle={finishBattle} / > : 
                <><NavBar></NavBar>
                <div className='h-[95vh] w-screen flex content-center items-center'>
                    {list.map((number,key) => <CampaignCard key={key} number={number} select={selectStage}></CampaignCard>)}
                </div>
                </>
            }
        </>
    )
}