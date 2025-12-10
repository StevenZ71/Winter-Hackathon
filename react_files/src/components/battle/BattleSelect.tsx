import NavBar from '../containers/NavBar/NavBar'
import BattleSelectCard from './BattleSelectCard'

export default function BattleSelect(){
    //mode selection, make campaign first
    return (
    <>
        <NavBar></NavBar>
        <div className = 'h-[95vh] w-screen'>
            <div className='flex justify-center h-[95vh]'>
                <BattleSelectCard link='/campaign' text='Campaign'/>
                <BattleSelectCard link='/endless' text='Endless'/>
                <BattleSelectCard link='/ranked' text='Ranked'/>
            </div>
        </div>
    </>
    )
}