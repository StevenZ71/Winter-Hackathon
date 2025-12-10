import { getCharacter } from '../../functions/data'
import NavBar from '../containers/NavBar/NavBar'
import { Link } from 'react-router-dom'

export default function Homepage(){
    return (
    <>
        <NavBar></NavBar>
        <div className={`h-[95vh] w-screen bg-[url(../../../images/${getCharacter().name}.png)] bg-contain bg-no-repeat bg-center`}>{/*Background/Introductory picture*/}
            <div className='flex flex-col justify-center h-[95vh]'>
                <div className='m-[2vh]'>
                    <Link to='/battleSelect'>Battle</Link>
                </div>
                <div className='m-[2vh]'>
                    <Link to='/collection'>Collection</Link>
                </div>
                <div className='m-[2vh]'>
                    <Link to='/instructions'>How to Play</Link>
                </div>
            </div>
        </div>
    </>
    )
}