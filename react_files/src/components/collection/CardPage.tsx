import { getCardsInfo } from '../../functions/data'
import Card from './Card'

export default function CardPage(){
    //card page that shows all the existing cards in one page
    return (
    <>
        <div>
        {getCardsInfo().map((card,key) => <Card card={card} key={key} />)}
        </div>
    </>
    )
}