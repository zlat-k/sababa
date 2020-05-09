import React from "react";
import './main.css'
import {Link} from "react-router-dom";

class Mains extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="titleMain">
                        <h1>
                            <span className="welcome">Welcome to Israel</span><br/>
                            First steps of the new repatriate
                        </h1>
                    </div>
                    <div className="h6Main">
                        <h6>
                            Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec
                            elaboraret<br/> interpretaris,
                            sed diceret
                            concludaturque no. Verear habemus sea ut
                        </h6>
                    </div>
                    <div className=" row buttons">
                        <div>
                            <Link to={`/${this.props.match.params.lang}/About`}>
                            <button type="button" className="btn btn-primary btn1">
                                Know More
                            </button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="road">
                    <img src={require("../media/homePage.jpg")} alt="road"/>
                </div>
            </div>
        );
    }
}

export default Mains;