import type { character, card } from '../type.ts';

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