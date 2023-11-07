import ContentDisplayer from "../Components/ComtentDisplayer/ContentDisplayer";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
export default function International(props){
    return(
        <section>
            <Navigation/>
            <div>
                <ContentDisplayer data = {props.International} name = "International"/>
            </div>
            <Footer/>
        </section>
    );
}