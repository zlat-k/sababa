import React from "react";
import './AboutShort.css'
import {Link, withRouter} from "react-router-dom";
import {url} from "../fetch";
import Article from "../components/article"


class AboutShort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            toggleButtonText1: false,
            toggleButtonText2: false,
        }
        console.log(this.state.data, "Sobaka")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.lang !== this.props.match.params.lang) {
            this.getData();
        }
    }

    toggleHandle = (index) => {
        this.setState({toggleButton: !this.state.toggleButton})
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch(`${url}/${this.props.match.params.lang}`)
            .then(response => response.json())
            .then(data => {
                console.log(data, "response data")
                this.setState({
                data:data.steps
            })})
            .catch((e) => console.log(e));
    };
    //
    // render() {
    //     console.log(this.state.data,'data');
    //     if (this.state.data.text1 !== undefined) {
    //         return (
    //             <div className="container page1">
    //                 <div className="">
    //                     <h1><span className="about">About</span> repatriation</h1>
    //                 </div>
    //                 <div className="row">
    //                     <div className="offset-1 col-10 offset-1">
    //                         <p className="ops">But I must explain to you how all this mistaken idea of denouncing
    //                             pleasure
    //                             and praising pain
    //                             was born
    //                             and I
    //                             will give you a complete account of the system, and expound the actual teachings of the
    //                             great explorer
    //                             of
    //                             the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids
    //                             pleasure itself,
    //                             because it is pleasure, but because those who do not know how to.
    //                         </p>
    //                     </div>
    //                 </div>
    //
    //
    //                 <div className="row left">
    //                     <div className="col-12 text">
    //                         <Article  />
    //                         {/*<div className="text-wrapper">*/}
    //                         {/*    <div className="text-side">*/}
    //                         {/*        <h3 className="step">*/}
    //                         {/*            Step 1*/}
    //                         {/*        </h3>*/}
    //                         {/*        <h4 className="step2">*/}
    //                         {/*            <Link className="text-title" to={`/${this.props.match.params.lang}/page3`}>*/}
    //                         {/*                {this.state.data.title1}*/}
    //                         {/*            </Link>*/}
    //                         {/*        </h4>*/}
    //                         {/*        <div className="text-toggle">*/}
    //                         {/*            <span className={`${this.state.toggleButton ? "text-hidden" : "text-visible"}`}>{this.state.data.text1.slice(0,300)} ...</span>*/}
    //                         {/*            <span className={`${this.state.toggleButton ? "text-visible" : "text-hidden"}`}>{this.state.data.text1}</span>*/}
    //
    //
    //                         {/*            <button className={`${this.state.toggleButton ? "hidden button-moreRead" : "button-moreRead"} `} onClick={this.toggleHandle}>read more</button>*/}
    //                         {/*        </div>*/}
    //                         {/*    </div>*/}
    //                         {/*    <div className="image-side">*/}
    //                         {/*        <img src={require("../media/clip-bad-gateaway@2x.png")}/>*/}
    //                         {/*    </div>*/}
    //                         {/*</div>*/}
    //                     </div>
    //                 </div>
    //
    //                 <div className="row right">
    //                     <div className="col-12 text">
    //                         <div className="text-wrapper">
    //                             <div className="image-side">
    //                                 <img src={require("../media/clip-payment@2x.png")}/>
    //                             </div>
    //                             <div className="text-side">
    //                                 <h3 className="step">
    //                                     Step 2
    //                                 </h3>
    //                                 <h4 className="step2">
    //                                     <Link className="text-title" to={`/${this.props.match.params.lang}/page3`}>
    //                                         {this.state.data.title2}
    //                                     </Link>
    //                                 </h4>
    //                                 <div className="text-toggle">
    //                                     <span className={`${this.state.toggleButton ? "text-hidden" : "text-visible"}`}>{this.state.data.text2.slice(0,300)} ...</span>
    //                                     <span className={`${this.state.toggleButton ? "text-visible" : "text-hidden"}`}>{this.state.data.text2}</span>
    //
    //
    //                                     <button className={`${this.state.toggleButton ? "hidden button-moreRead" : "button-moreRead"} `} onClick={this.toggleHandle}>read more</button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //
    //                 <Link to={`/${this.props.match.params.lang}/About-f`}>
    //                     <div className="row drop">
    //
    //                         <div>
    //                             <i className="fas fa-chevron-circle-down"></i>
    //                         </div>
    //                         <div>
    //                             <p className="show">Show more</p>
    //                         </div>
    //
    //                     </div>
    //                 </Link>
    //                 <h4 className="downInfo">
    //                     Useful articles for you
    //                 </h4>
    //                 <Link to={`/${this.props.match.params.lang}/page7`} style={{textDecoration: 'none', link: "black"}}>
    //                     <div className="row rowImageDown justify-content-center ">
    //                         <div className="img1 col-4 justify-content-center">
    //                             <div className="d-flex justify-content-center"><img
    //                                 src={require("../media/Ellipse 345@2x.png")}/></div>
    //                             <h5>
    //                                 Change the name
    //                             </h5>
    //                             <p>
    //                                 Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo.
    //                                 Verear
    //                             </p>
    //                         </div>
    //                         <div className="img2 col-4 justify-content-center">
    //                             <div className="d-flex justify-content-center"><img
    //                                 src={require("../media/Ellipse 347@2x.png")}/></div>
    //                             <h5>
    //                                 Notification of citizenship
    //                             </h5>
    //                             <p>
    //                                 Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo.
    //                                 Verear
    //                             </p>
    //                         </div>
    //                         <div className="img3 col-4 justify-content-center">
    //                             <div className="d-flex justify-content-center"><img
    //                                 src={require("../media/Ellipse 344@2x.png")}/></div>
    //                             <h5>
    //                                 The 4 generation
    //                             </h5>
    //                             <p style={{paddingBottom: '10px'}}>
    //                                 Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo.
    //                                 Verear
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </Link>
    //                 <div className="row justify-content-center">
    //
    //                     <div className="prevNext">
    //                         {/*<i className="fas fa-arrow-circle-left"></i>*/}
    //                     </div>
    //
    //                     <div className="prevNext">
    //                         {/*<i className="fas fa-arrow-circle-right"></i>*/}
    //                     </div>
    //
    //                 </div>
    //             </div>
    //         )
    //     } else {
    //         return 'loading'
    //     }
    //
    //
    //     ;
    // }


    render() {
        if(this.state.data !== null && this.state.data.steps.length > 0){
            console.log("Pesik")
            return (
                <div>
                    {this.state.data["steps"].map((item, index) => {
                        return <Article key={index} data={item}/>
                    })}
                </div>
            )
        } else {
            return "Loading"
       }

    }
}

export default withRouter(AboutShort);