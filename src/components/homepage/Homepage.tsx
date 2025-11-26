import NavBar from '../containers/NavBar/NavBar'

export default function Homepage(){
    return (
    <>
        <div className='h-screen w-lvw bg-[url(../../../vite.svg)] bg-contain bg-no-repeat bg-center'>{/*Background/Introductory picture*/}
            <div className='flex flex-col justify-center h-screen'>
                <div className='m-[1vh]'>
                    <a href='/battle' className='flex-1 m-[1vh]'>Battle</a>
                </div>
                <div className='m-[1vh]'>
                    <a href='/collection' className='flex-1 m-[1vh]'>Collection</a>
                </div>
                <div className='m-[1vh]'>
                    <a href='/instructions' className='flex-1 m-[1vh]'>How to Play</a>
                </div>
            </div>
        </div>
        <NavBar></NavBar>
    </>
    )
}