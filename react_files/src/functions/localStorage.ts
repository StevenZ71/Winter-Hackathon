export function getCharacter(){
    return JSON.parse(localStorage.getItem("Character"));
}
export function getCharacters(){
    return JSON.parse(localStorage.getItem("Characters"));
}