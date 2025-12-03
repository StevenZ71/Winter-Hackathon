export default function PageCard(props: any){
    return (
    <>
        <div className = 'flex-1 place-items-center mx-[10vw] my-[10vh] relative'>
            <img src = {props.image} />
            <div className = 'absolute bottom-0'>{props.text}</div>
        </div>
    </>
    )
}