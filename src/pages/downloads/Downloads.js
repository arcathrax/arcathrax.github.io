import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Downloads.css";


function downloads(){
    return(
        <div>
            <Navbar/>

            <div className={"aboutmeMainDiv"}>
                <p>
                    downloads
                </p>
            </div>

            <Footer/>
        </div>
    );
}

export default  downloads;