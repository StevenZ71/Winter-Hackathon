import type { character, card, cardInfo } from '../type.ts';

export function setStage(stage : number){
    localStorage.setItem("Stage", stage.toString());
}
export function setCurrency(currency : number){
    localStorage.setItem("Currency", currency.toString());
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
            {name: "HatCat", description: "Your average wizard cat", maxHp: 10, manaRegen: 3, cardSpeed: 30},
            {name: "BagCat", description: "This cat raised it's health stat in fear of harm", maxHp: 15, manaRegen: 2, cardSpeed: 45}
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