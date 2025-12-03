//Write here instead of collection.tsx 
import CharacterCard from './CharacterCard'
import CharacterCarousel from './CharacterCarousel'

export default function CharacterPage(props: any){
    //Character card page that shows all the existing cards in carousel
    return (
    <>
        <CharacterCard></CharacterCard>
        <CharacterCarousel></CharacterCarousel>
    </>
    )
}