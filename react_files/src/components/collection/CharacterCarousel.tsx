import React, { useState } from 'react';

interface Character {
    title: string;
    text: string;
    imageUrl: string;
}

interface MiniCharacterCardProps {
    character: Character; 
    isActive: boolean;
    onSelect: () => void; 
}

const MiniCharacterCard = ({ character, isActive, onSelect }: MiniCharacterCardProps) => {
    const baseWidth = 'w-36 sm:w-44 lg:w-48'; 
    const cardScale = isActive ? 'scale-110 shadow-orange-500/80' : 'scale-90 opacity-70 shadow-amber-900';
    const borderColor = isActive ? 'border-orange-500' : 'border-gray-900';
    const cardHeight = 'h-64 sm:h-72 lg:h-80'; 

    return (
        <div 
            className={`
                bg-amber-600 shadow-2xl transition-all duration-300 ease-in-out 
                border-4 flex flex-col justify-start items-center
                shrink-0 rounded-lg p-2 cursor-pointer 
                ${baseWidth} ${cardHeight} ${cardScale} ${borderColor}
                origin-center 
            `}
            onClick={onSelect}
        >
            <div className="w-full h-1/2 bg-yellow-400 flex items-center justify-center rounded-sm mb-1 border-b-2 border-amber-900">
                <img src={character.imageUrl || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23555' d='M21 16H3V4h18m0-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3h8l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E"} 
                    alt={character.title}
                    className="max-w-full max-h-full object-contain p-1"
                />
            </div>
            <div className="text-white w-full h-1/2 text-center overflow-hidden flex flex-col justify-center">
                <h5 className="font-extrabold uppercase text-lg sm:text-xl leading-snug tracking-wider">
                    {character.title}
                </h5>
                <p className="italic text-xs sm:text-sm leading-tight text-amber-100 mt-0.5">
                    {character.text}
                </p>
            </div>
        </div>
    );
};

export default function CharacterCarousel() {
    const characterData: Character[] = [ 
        { title: "Fire Mage", text: "Master of incineration.", imageUrl: "" },
        { title: "Ice Paladin", text: "Guardian of the frozen oath.", imageUrl: "" },
        { title: "Wind Archer", text: "Swift as the summer breeze.", imageUrl: "" },
        { title: "Earth Golem", text: "Unmoving fortress of rock.", imageUrl: "" },
        { title: "Shadow Rogue", text: "Quick and silent assassin.", imageUrl: "" },
        { title: "Aqua Warrior", text: "Control of the tides.", imageUrl: "" },
    ];

    const [activeIndex, setActiveIndex] = useState(2); 
    const totalCards = characterData.length;

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };
    
    const handleSelect = (index: number) => {
        setActiveIndex(index);
    }

    const itemWidth = 20; 
    const transformX = `calc(-${activeIndex * itemWidth}% + 50%)`; 
    const transformOffset = `translateX(${transformX})`; 

    return (
        <>
        <div className="relative w-1/2 h-96 flex justify-center items-center overflow-hidden bg-gray-900 ml-auto mr-0">
            
            <div 
                className="flex transition-transform duration-500 ease-in-out h-full items-center absolute left-0"
                style={{ 
                    transform: transformOffset, 
                    width: `${totalCards * itemWidth}%` 
                }}
            >
                {characterData.map((character, index) => (
                    <div
                        key={index}
                        className={`
                            flex justify-center items-center w-[${itemWidth}%] h-full 
                            transition-all duration-300 ease-in-out shrink-0
                        `}
                        style={{ zIndex: index === activeIndex ? 30 : 1 }}
                    >
                        <MiniCharacterCard 
                            character={character} 
                            isActive={index === activeIndex} 
                            onSelect={() => handleSelect(index)}
                        />
                    </div>
                ))}
            </div>
            <button 
                onClick={handlePrev}
                className="absolute left-0 z-30 p-4 mx-4 rounded-full bg-black/50 hover:bg-black/80 text-white text-4xl leading-none transition-colors top-1/2 -translate-y-1/2"
                aria-label="Previous Character"
            >
                {'<'}
            </button>
            
            <button 
                onClick={handleNext}
                className="absolute right-0 z-30 p-4 mx-4 rounded-full bg-black/50 hover:bg-black/80 text-white text-4xl leading-none transition-colors top-1/2 -translate-y-1/2"
                aria-label="Next Character"
            >
                {'>'}
            </button>
        </div>
        </>
    );
}