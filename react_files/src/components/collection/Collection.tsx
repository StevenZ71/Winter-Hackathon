import NavBar from '../containers/NavBar/NavBar'
import CharacterCarousel from './CharacterCarousel'
import CharacterPage from './CharacterPage'

export default function Collection(){
    //two sections, card collection with deck creation, character selection and 
    return (
    <>
        <NavBar></NavBar>
        <CharacterPage> </CharacterPage>
        <CharacterCarousel></CharacterCarousel>
    </>
    )
}