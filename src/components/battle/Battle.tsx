import { useState } from "react"
export default function Battle(props: any){
    const [turn, setTurn] = useState(0);
    const [hp, setHp] = useState(props.maxHp);
    return(
        <>
            <div className='h-screen w-screen bg-[url(../../../vite.svg)] bg-contain bg-no-repeat bg-center'>{/*Enemy*/}
            </div>
        </>
    )
}