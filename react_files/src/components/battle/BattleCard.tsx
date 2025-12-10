import { useState } from "react";
import { manaUsage } from "../../functions/util";

export default function BattleCard(props: any){
    const [hover, setHover] = useState(false);
    const [running, setRunning] = useState(true);
    const [back, setBack] = useState(true);
    const hoverMouse = () =>{
        setHover(true);
        setRunning(true);
        setBack(false);
    }
    const unHoverMouse = () =>{
        setHover(false);
        setRunning(true);
        setBack(true);
    }
    const restart = () =>{
        setRunning(false);
        setBack(!hover);
    }
    const playCard = () =>{
        if(props.mana > manaUsage(props.card)){
            props.playCard(props.card);
        }
    }
    return(
        <>
            <div className='absolute text-center justify-center align-middle h-[40vh] w-[15vw]'
                onMouseEnter={hoverMouse}
                onMouseLeave={unHoverMouse}
                onClick={playCard}
                style={{transform: `translate(${props.index*10 + 35}vw,60vh) rotate(${props.index*3}deg)`}}>
            </div>
            {/* make color based on type of card */}
            <div
            onAnimationEnd={restart}
            className={`${props.card.effect=="damage" ? 'bg-red-500' : 'bg-blue-500'} pointer-events-none absolute outline-red-50 border rounded-xs text-center justify-center align-middle h-[40vh] w-[15vw]`}
            style={{transform: hover&&!back&&!running ? `translate(42.5vw,20vh) scale(2) rotate(0deg)` : `translate(${props.index*10 + 35}vw,60vh) rotate(${props.index*3}deg)`, zIndex: hover&&!back&&!running ? '1': '0', animationFillMode: 'forwards', animationName: running ? 'hoverBattleCard' : '', animationDuration: '1s', animationDirection: hover ? 'normal' : 'reverse'}}
            >
                {props.card.topic}
                <img src = {`../../../images/${props.card.topic}.png`} />
            </div>
        </>
    )
}