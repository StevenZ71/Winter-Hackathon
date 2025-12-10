export default function CampaignCard(props: any){
    const select = () =>{
        props.select(props.number);
    }
    return (
        <>
        <div onClick={select} className='bg-blue-500 flex flex-col text-center justify-center align-middle h-[15vw] w-[15vw] ml-[1vw] mr-[1vw]'>{props.number}</div>
        </>
    )
}