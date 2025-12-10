import { useState } from 'react';
import { convertToCard, getCardsInfo, getDeck, setDeck } from '../../functions/data'
import Card from './Card'

export default function CardPage(){
    const [current, setCurrent] = useState(convertToCard(getCardsInfo()[0]));
    //card page that shows all the existing cards in one page
    const select = (card) =>{
        setCurrent(card);
    }
    const replace = (card, key) =>{
        let answer = prompt("Difficulty level from 1 to 3?");
        setDeck(current,key,answer);
        setCurrent(convertToCard(getCardsInfo()[0]));
    }
    return (
    <>
        <div className='flex'>
            {getDeck().map((card,key) => <Card card={card} key={key} index={key} select={replace}/>)}
        </div>
        <div className='flex'>
            {getCardsInfo().map((card,key) => <Card card={card} key={key} index={key} select={select}/>)}
        </div>
    </>
    )
}