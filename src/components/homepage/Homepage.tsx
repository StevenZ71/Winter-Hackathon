import NavBar from '../containers/NavBar/NavBar'
import PageCard from './PageCard'

export default function Homepage(){
    return (
    <>
        <NavBar></NavBar>
        <img src="null">{/*Introductory picture*/}</img>
        <div className="">{/*Description*/}</div>
        <section className="flex">
            <PageCard></PageCard>
            <PageCard></PageCard>
        </section>
    </>
    )
}