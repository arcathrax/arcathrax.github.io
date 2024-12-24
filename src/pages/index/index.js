import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./index.css";


function index(){
    return(
        <div>
            <Navbar/>

            <div className={"indexMainDiv"}>
                <p>
                    who are you?
                </p>
                <p>
                    who do you want to be?
                </p>
                <p>
                    do you know yourself?
                </p>
                <p>
                    where are you?
                </p>
                <p>
                    did your stars align?
                </p>
                <p>
                    are you still chasing them?
                </p>
            </div>

            <Footer/>
        </div>
    );
}

export default  index;