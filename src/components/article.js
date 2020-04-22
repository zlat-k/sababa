import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Article extends Component {
   constructor(props) {
       super(props);
       console.log(props, "Props articel")
   }

    render() {
        return (
            <div className="text-wrapper">
                <div className="text-side">
                    <h3 className="step">
                        {this.props.title}
                    </h3>
                    <h4 className="step2">
                        <Link className="text-title" to={`/${this.props.link}/page3`}>
                            {this.props.data.title1}
                        </Link>
                    </h4>
                    <div className="text-toggle">
                        <span className={`${this.props.toggleButton ? "text-hidden" : "text-visible"}`}>{this.props.data.text1.slice(0,300)} ...</span>
                        <span className={`${this.props.toggleButton ? "text-visible" : "text-hidden"}`}>{this.state.data.text1}</span>


                        <button className={`${this.state.toggleButton ? "hidden button-moreRead" : "button-moreRead"} `} onClick={this.toggleHandle}>read more</button>
                    </div>
                </div>
                <div className="image-side">
                    <img src={require("../media/clip-bad-gateaway@2x.png")}/>
                </div>
            </div>
        );
    }
}

export default Article;