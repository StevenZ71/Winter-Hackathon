import { Link } from 'react-router-dom'
export default function NavBar(){
    return (
        <>
            <div className='flex w-screen bg-orange-600 h-[5vh]'>
                <div className='flex-1 text-center m-auto inset-0'>
                    <Link to='/' className='text-sky-500 hover:text-black'>Homepage</Link>
                </div>
                <div className='flex-1 text-center m-auto inset-0'>
                    <Link to='/collection' className='text-sky-500 hover:text-black'>Collection</Link>
                </div>
                <div className='flex-1 text-center m-auto inset-0'>
                    <Link to='/battleSelect' className='text-sky-500 hover:text-black'>Battle</Link>
                </div>
            </div>
        </>
    )
}