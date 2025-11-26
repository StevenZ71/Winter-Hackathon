export default function NavBar(){
    return (
        <>
            <div className='flex w-screen bg-orange-600 h-[5vh]'>
                <div className='flex-1 text-center m-auto inset-0'>
                    <a href='/' className='text-sky-500 hover:text-black'>Homepage</a>
                </div>
                <div className='flex-1 text-center m-auto inset-0'>
                    <a href='/collection' className='text-sky-500 hover:text-black'>Collection</a>
                </div>
                <div className='flex-1 text-center m-auto inset-0'>
                    <a href='/battle' className='text-sky-500 hover:text-black'>Battle</a>
                </div>
            </div>
        </>
    )
}