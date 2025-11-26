//cards is scaleable (not definite size, vh vw)
//vh
//vwh 
//em for text
//make the shape of the card

//created a div element
const myBox: HTMLDivElement = document.createElement("div");

myBox.style.width = "100px";
myBox.style.height = "100px";
myBox.style.border = "1px solid black";
myBox.style.backgroundColor = "lightblue";

//add text content
myBox.textContent = "Card";

//append to document body
document.body.appendChild(myBox);

export default function Card(props){
    return (
    <>
        <div className="bg-amber-300 min-h-[10vh] min-w-[15vw] p-4 shadow-lg flex items-center justify-center">
            <span className="text-[1.5em] font-bold text-center">
                {props.cardName}
            </span>
        </div>
    </>
    )
}