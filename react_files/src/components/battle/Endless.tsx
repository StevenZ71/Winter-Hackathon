import { useNavigate } from "react-router-dom";
import { getCardsInfo, getCurrency, getStage, setCurrency, setStage } from "../../functions/data";
import { generateCard, randomInt } from "../../functions/util";
import Battle from "./Battle";
import { useState } from "react";

export default function Endless(){
    const [enemy, setEnemy] = useState(null);
    const navigate = useNavigate();
    const getEnemy = () =>{
        // if(stage==0){
            return {name: "HatCat", level: 1, levelPoints: 0, maxHp: 10, manaRegen: 3, cardSpeed: 30, unlocked: false};
        // }
    }
    const getCard = () =>{
        return generateCard(getCardsInfo()[randomInt(getCardsInfo().length)]);
    }
    const finishBattle = (win : boolean) =>{
        if(win){
            alert("You defeated the enemy. Onto the next!");
            setCurrency(getCurrency() + 1);
        }
        else{
            alert("You lose!");
            navigate("/");
        }
    }
    return(
        <>
        <Battle enemy={getEnemy()} enemyCard={getCard()} finishBattle={finishBattle} / >
        </>
    )
}