//Write here instead of collection.tsx 
import { useState } from 'react';
import { getCharacter, setCharacter } from '../../functions/data';
import CharacterCard from './CharacterCard'
import CharacterCarousel from './CharacterCarousel'

export default function CharacterPage(props: any){
    const [update, setUpdate] = useState(false);
    const select = (index : number) =>{
        setCharacter(index);
        setUpdate(!update);
    }
    //Character card page that shows all the existing cards in carousel
    return (
    <>
        {/* <CharacterCard update = {update}></CharacterCard> */}
        <CharacterCarousel select = {select}></CharacterCarousel>
    </>
    )
}