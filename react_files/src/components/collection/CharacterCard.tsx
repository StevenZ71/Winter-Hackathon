// Character cards - later will be put in Carousel
//Tailwind - vw vh (viewwidth viewheight) c
//5vw is 5% of viewwidth of screen
//em

import { getCharacter, getCharacters, getCharactersInfo } from "../../functions/data";

export default function CharacterCard(props: any){
    return (
        <>
            <div className="absolute bg-amber-600 w-[35vw] h-[85vh] m-[5vh]"> 
                <img className="" src={`/images/${getCharacter().name}.png`} alt="Character Image"/>
                <div className="">
                    <h5 className="">{getCharacter().name}</h5>
                    <p className="">{getCharactersInfo().find(character => character.name==getCharacter().name).description}</p>
                </div>
            </div>
        </>
        )
}