import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Downloads.css";
import {Link} from "react-router-dom";


function downloads(){
    return(
        <div>
            <Navbar/>

            <div className={"aboutmeMainDiv"}>
                <h1>
                    downloads
                </h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                ExoDist
                            </td>
                            <td>
                                audio plugin
                            </td>
                            <td>
                                <Link to={"https://github.com/arcathrax/ExoDist/releases/download/v0.1.0/ExoDist.vst3.zip"}>
                                    link
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                quora
                            </td>
                            <td>
                                serum bank
                            </td>
                            <td>
                                <Link to={"https://arcathrax.gumroad.com/l/quora"} target={"blank"}>
                                    link
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Footer/>
        </div>
    );
}

export default  downloads;