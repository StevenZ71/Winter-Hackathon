import { useState } from 'react';
import NavBar from '../containers/NavBar/NavBar'
import CardPage from './CardPage'
import CharacterCarousel from './CharacterCarousel'
import CharacterPage from './CharacterPage'

export default function Collection(){
    const [cardPage, setCardPage] = useState(true);
    //two sections, card collection with deck creation, character selection and 
    const click = () =>{
        setCardPage(!cardPage);
    }
    return (
    <>
        <NavBar></NavBar>
        <button onClick={click}>{cardPage ? 'Character Select' : 'Card Select'}</button>
        {cardPage ? <CardPage></CardPage> :
        <><CharacterPage> </CharacterPage>
        </>
        }
    </>
    )
}