import ContentDisplayer from "../Components/ComtentDisplayer/ContentDisplayer";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
export default function Israel(props){
    return(
        <section>
            <Navigation/>
            <div>
                <h1></h1>
                <ContentDisplayer data = {props.Israel} name = "Israel"/>
            </div>
            <Footer/>
        </section>
    );
}