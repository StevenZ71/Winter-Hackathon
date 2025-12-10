import type { character, card, cardInfo } from '../type.ts';

export function setStage(stage : number){
    localStorage.setItem("Stage", stage.toString());
}
export function setCurrency(currency : number){
    localStorage.setItem("Currency", currency.toString());
}
export function setDeck(card : cardInfo, index : number, difficulty = 1){
    let temp = getDeck();
    let newCard = convertToCard(card);
    try{
        if(difficulty >= 1 && difficulty <= 3){
            newCard.difficulty = parseInt(difficulty.toString());
        }
        else{
            alert("Not within range. Difficulty set to 1.");
            newCard.difficulty = 1;
        }
    }
    catch{
        alert("Not within range. Difficulty set to 1.");
        newCard.difficulty = 1;
    }
    alert("Card changed");
    temp.splice(index,1);
    temp.push(newCard);
    localStorage.setItem("Deck",JSON.stringify(temp));
}
export function setCharacter(index : number){
    localStorage.setItem("Character",JSON.stringify(getCharacters()[index]));
    console.log(getCharacters()[index]);
}
export function convertToCard(card : cardInfo) : card{
    return {
        topic: card.topic, effect: "damage", difficulty: 1, effectMultiplier: card.effectMultiplier, manaUsage: card.manaUsage, question: null
    };
}
export function getCharacter() : character{
    return JSON.parse(localStorage.getItem("Character"));
}
export function getCharacters() : character[]{
    return JSON.parse(localStorage.getItem("Characters"));
}
export function getCurrency() : number{
    return JSON.parse(localStorage.getItem("Currency"));
}
export function getDeck() : card[]{
    return JSON.parse(localStorage.getItem("Deck"));
}
export function getStage() : number{
    return JSON.parse(localStorage.getItem("Stage"));
}
export function getCharactersInfo(){
    return [
            {name: "HatCat", description: "Your average wizard cat", maxHp: 10, manaRegen: 0.5, cardSpeed: 30},
            {name: "BagCat", description: "This cat raised it's health stat in fear of harm", maxHp: 15, manaRegen: 0.3, cardSpeed: 45},
            {name: "BeardCat", description: "You better be nice to this cat, or else you might get no presents...", maxHp: 7, manaRegen: 1, cardSpeed: 45},
            {name: "StockingCat", description: "This cat is quite cozy.", maxHp: 7, manaRegen: 0.3, cardSpeed: 20},
        ];
}
export function getCardsInfo() : cardInfo[]{
    return [
        {topic: "Limits", effectMultiplier: 1, manaUsage: 10},
        {topic: "Power Rule", effectMultiplier: 1.2, manaUsage: 12},
        {topic: "Product Rule", effectMultiplier: 2, manaUsage: 15},
        {topic: "Quotient Rule", effectMultiplier: 2.2, manaUsage: 17},
        {topic: "Chain Rule", effectMultiplier: 2.4, manaUsage: 20}
      ];
}