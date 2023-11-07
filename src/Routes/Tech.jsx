import ContentDisplayer from "../Components/ComtentDisplayer/ContentDisplayer";
import Footer from "../Components/Footer/Footer";
import Navigation from "../Components/Navigation/Navigation";

export default function Tech(props){
    return(
        <section>
            <Navigation/>
            <div>
                <ContentDisplayer data = {props.Tech} name = "Technology"/>
            </div>
            <Footer/>
        </section>
    );
}