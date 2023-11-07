import ContentDisplayer from "../Components/ComtentDisplayer/ContentDisplayer";
import Footer from "../Components/Footer/Footer";
import Navigation from "../Components/Navigation/Navigation";
import Hero from "../Components/HeroSection/Hero";

export default function Home(props){

    const India_ten = props.India.slice(0,10);
    const International = props.International.slice(0,10);
    const Space = props.Space.slice(0,10);
    const Sports = props.Sports.slice(0,10);
    const Tech = props.Tech.slice(0,10);
    const israel = props.Israel.slice(0,10);
    return(
        <div>
            <Navigation/>
            <Hero/>
            <section>
                <ContentDisplayer data = {India_ten} name = "India"/>
                <ContentDisplayer data = {International} name = "International"/>
                <ContentDisplayer data = {Space} name = "Space"/>
                <ContentDisplayer data = {Sports} name = "Sports"/>
                <ContentDisplayer data = {Tech} name = "Tech"/>
                <ContentDisplayer data = {israel} name = "Israel-Palestine War"/>
            </section>
            <Footer/>
        </div>
    )
}