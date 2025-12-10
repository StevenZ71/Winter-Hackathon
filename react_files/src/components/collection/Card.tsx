//cards is scaleable (not definite size, vh vw)
//vh
//vwh 
//em for text
//make the shape of the card


export default function Card(props: any) {
    const imageSize = '7vh';
    
    return (
        <>
            <div
                className="bg-red-600 w-[12vw] h-[30vh] m-[4vw] 
                           flex flex-col items-center p-[1vw] 
                           rounded-xl shadow-2xl text-white"
            >
                <h3 
                    //scalable text using 'em' units
                    className="text-[1.4em] leading-[1.2em] font-bold text-center mb-[1vh]"
                >
                    {props.title || "Card Title"}
                </h3>
                <div
                    //scalable image placeholder dimensions
                    style={{ height: imageSize, width: imageSize }}
                    className="bg-gray-200 rounded-full mb-[1.5vh] flex justify-center items-center overflow-hidden"
                >
                    <span className="text-black text-[0.8em] font-medium">
                        [Image]
                    </span>
                </div>
                <p 
                    //scalable text using 'em' units
                    className="text-[1.1em] leading-[1.4em] font-semibold text-center mt-auto"
                >
                    Name: {props.name || "Default Content"}
                </p>

            </div>
        </>
    )
}