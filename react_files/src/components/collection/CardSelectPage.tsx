import CharacterCard from './CharacterCard';
import CharacterCarousel from './CharacterCarousel';

export default function CardSelectPage() {
    return (
        // 1. Main container uses Flexbox to split the screen horizontally.
        // min-h-screen ensures it covers the full height.
        <div className="flex w-full min-h-screen"> 
            
            {/* 2. LEFT HALF: Large Static Card */}
            {/* w-1/2 forces this area to take up 50% of the screen width */}
            <div className="w-1/2">
                {/* * NOTE: Your CharacterCard uses absolute positioning.
                * If it's causing issues, you may need to remove 'absolute' from its class name 
                * in CharacterCard.tsx and rely on the parent flow here.
                */}
                <CharacterCard />
            </div>

            {/* 3. RIGHT HALF: Small Stacked Carousel */}
            {/* w-1/2 forces this area to take up the other 50% of the screen width */}
            <div className="w-1/2 h-full bg-gray-200"> 
                {/* CharacterCarousel.tsx content fills this 50% width area */}
                <CharacterCarousel /> 
            </div>
            
        </div>
    );
}