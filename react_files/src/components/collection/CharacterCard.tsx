// Character cards - later will be put in Carousel
//Tailwind - vw vh (viewwidth viewheight) c
//5vw is 5% of viewwidth of screen
//em

export default function CharacterCard(props: any){
    return (
        <>
            <div className="absolute bg-amber-600 w-[35vw] h-[85vh] m-[5vh]"> 
                <img className="" src="../../../assets/react.svg" alt="Character Image"/>
                <div className="">
                    <h5 className="">Character Title</h5>
                    <p className="">Character Text</p>
                </div>
            </div>
        </>
        )
}