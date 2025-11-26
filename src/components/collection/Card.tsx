//cards is scaleable (not definite size, vh vw)
//vh
//vwh 
//em for text


export default function Card(props){
    return (
    <>
        <div className="bg-amber-300">
            {props.cardName}
        </div>
    </>
    )
}