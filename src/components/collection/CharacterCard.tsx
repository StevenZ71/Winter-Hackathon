// Character cards - later will be put in Carousel
//Tailwind - vw vh (viewwidth viewheight) c
//5vw is 5% of viewwidth of screen
//em
export default function PlayerCard(){
    //
    return (
    <>
        <div className="w-[5vw]"> 
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Ivan</h5>
                <p className="card-text">He has so much health cuz he is so fat</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>
    )
}