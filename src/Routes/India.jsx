import ContentDisplayer from "../Components/ComtentDisplayer/ContentDisplayer";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
export default function India(props){
    return(
        <section>
            <Navigation/>
            <div>
                <ContentDisplayer data = {props.India} name = "India"/>
            </div>
            <Footer/>
        </section>
    );
}