import NavBar from '../containers/NavBar/NavBar'

export default function Homepage(){
    return (
    <>
        <NavBar></NavBar>
        <div className='h-[95vh] w-screen bg-[url(../../../vite.svg)] bg-contain bg-no-repeat bg-center'>{/*Background/Introductory picture*/}
            <div className='flex flex-col justify-center h-[95vh]'>
                <div className='m-[2vh]'>
                    <a href='/battle'>Battle</a>
                </div>
                <div className='m-[2vh]'>
                    <a href='/collection'>Collection</a>
                </div>
                <div className='m-[2vh]'>
                    <a href='/instructions'>How to Play</a>
                </div>
            </div>
        </div>
    </>
    )
}