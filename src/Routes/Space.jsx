import ContentDisplayer from "../Components/ComtentDisplayer/ContentDisplayer";
import Footer from "../Components/Footer/Footer";
import Navigation from "../Components/Navigation/Navigation";
export default function Space(props){
    return(
        <section>
            <Navigation/>
            <div>
                <ContentDisplayer data = {props.Space} name = "Space"/>
            </div>
            <Footer/>
        </section>
    );
}