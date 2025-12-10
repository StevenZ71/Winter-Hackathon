import { useState } from 'react';
import NavBar from '../containers/NavBar/NavBar'
import CardPage from './CardPage'
import CharacterCarousel from './CharacterCarousel'
import CharacterPage from './CharacterPage'

export default function Collection(){
    const [cardPage, setCardPage] = useState(true);
    //two sections, card collection with deck creation, character selection and 
    return (
    <>
        <NavBar></NavBar>
        {cardPage ? <CardPage></CardPage> :
        <><CharacterPage> </CharacterPage>
        <CharacterCarousel></CharacterCarousel></>
        }
    </>
    )
}