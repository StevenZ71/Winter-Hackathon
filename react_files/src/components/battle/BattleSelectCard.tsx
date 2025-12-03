import { Link } from "react-router-dom"
export default function BattleSelectCard(props: any){
    return (
        <>
            <Link to={props.link} className='bg-blue-500 flex flex-col text-center justify-center align-middle h-[50vh] w-[25vw] ml-[5vw] mr-[5vw]'>
                {props.text}
            </Link>
        </>
    )
}