import React from "react";
import './AboutFull.css'
import {Link} from "react-router-dom";
import {url} from "../fetch";

class AboutFull extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                title1: undefined,
                text1: undefined,
                title2: undefined,
                text2: undefined
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.lang!==this.props.match.params.lang){
            this.getData();
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch(`${url}/${this.props.match.params.lang}`)
            .then(response => response.json())
            .then(data => this.setState({
                data: {
                    title1: data.steps[0].title,
                    text1: data.steps[0].description,
                    title2: data.steps[1].title,
                    text2: data.steps[1].description,
                    title3: data.steps[2].title,
                    text3: data.steps[2].description,
                    title4: data.steps[3].title,
                    text4: data.steps[3].description,
                    title5: data.steps[4].title,
                    text5: data.steps[4].description,
                    title6: data.steps[5].title,
                    text6: data.steps[5].description,
                    title7: data.steps[6].title,
                    text7: data.steps[6].description,
                    title8: data.steps[7].title,
                    text8: data.steps[7].description,
                    title9: data.steps[8].title,
                    text9: data.steps[8].description
                }
            }))
            .catch((e) => console.log(e));
    };

    render() {
        return (
            <div className="container page1">
                <div className="">
                    <h1><span className="about">About</span> repatriation</h1>
                </div>
                <div className="row">
                    <div className="offset-1 col-10 offset-1">
                        <p className="ops">But I must explain to you how all this mistaken idea of denouncing pleasure
                            and
                            praising pain
                            was born
                            and I
                            will give you a complete account of the system, and expound the actual teachings of the
                            great
                            explorer
                            of
                            the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids
                            pleasure
                            itself,
                            because it is pleasure, but because those who do not know how to.
                        </p>
                    </div>
                </div>
                <div className="row left">
                    <div className="col-12 text">
                        <div className="text-wrapper">
                            <div className="text-side">
                                <h3 className="step">
                                    Step 1
                                </h3>
                                <Link to={`/${this.props.match.params.lang}/page3`}>
                                    <h4 className="step2">
                                        {this.state.data.title1}
                                    </h4>
                                </Link>
                                <p className="">
                                    {this.state.data.text1}
                                </p>
                            </div>
                            <div className="image-side">
                                <img src={require("../media/clip-bad-gateaway@2x.png")}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row right">
                    <div className="col-12 text">
                        <div className="text-wrapper">
                            <div className="image-side">
                                <img src={require("../media/clip-payment@2x.png")}/>
                            </div>
                            <div className="text-side">
                                <h3 className="step">
                                    Step 2
                                </h3>
                                <Link to={`/${this.props.match.params.lang}/page3`}>
                                    <h4 className="step2">
                                        {this.state.data.title2}
                                    </h4>
                                </Link>
                                <p className="">
                                    {this.state.data.text2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row left">
                    <div className="col-12 text">
                        <div className="text-wrapper">
                            <div className="text-side">
                                <h3 className="step">
                                    Step 3
                                </h3>
                                <Link to={`/${this.props.match.params.lang}/page3`}>
                                    <h4 className="step2">
                                        {this.state.data.title3}
                                    </h4>
                                </Link>
                                <p className="">
                                    {this.state.data.text3}
                                </p>
                            </div>
                            <div className="image-side">
                                <img src={require("../media/clip-welcome@2x.png")}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row right">
                    <div className="col-12 text">
                        <div className="text-wrapper">
                            <div className="image-side">
                                <img src={require("../media/clip@2x.png")}/>
                            </div>
                            <div className="text-side">
                                <h3 className="step">
                                    Step 4
                                </h3>
                                <Link to={`/${this.props.match.params.lang}/page3`}>
                                    <h4 className="step2">
                                        {this.state.data.title2}
                                    </h4>
                                </Link>
                                <p className="">
                                    {this.state.data.text2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row left">
                    <div className="col-12 text">
                        <div className="text-wrapper">
                            <div className="text-side">
                                <h3 className="step">
                                    Step 5
                                </h3>
                                <Link to={`/${this.props.match.params.lang}/page3`}>
                                    <h4 className="step2">
                                        {this.state.data.title5}
                                    </h4>
                                </Link>
                                <p className="">
                                    {this.state.data.text5}
                                </p>
                            </div>
                            <div className="image-side">
                                <img src={require("../media/clip-sign-up@2x.png")}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row right">
                    <div className="col-12 text">
                        <div className="text-wrapper">
                            <div className="image-side">
                                <img src={require("../media/clip-travel@2x.png")}/>
                            </div>
                            <div className="text-side">
                                <h3 className="step">
                                    Step 6
                                </h3>
                                <Link to={`/${this.props.match.params.lang}/page3`}>
                                    <h4 className="step2">
                                        {this.state.data.title6}
                                    </h4>
                                </Link>
                                <p className="">
                                    {this.state.data.text6}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row left">
                    <div className="col-12 text">
                        <div className="text-wrapper">
                            <div className="text-side">
                                <h3 className="step">
                                    Step 7
                                </h3>
                                <Link to={`/${this.props.match.params.lang}/page3`}>
                                    <h4 className="step2">
                                        {this.state.data.title7}
                                    </h4>
                                </Link>
                                <p className="">
                                    {this.state.data.text7}
                                </p>
                            </div>
                            <div className="image-side">
                                <img src={require("../media/clip-no-messages@2x.png")}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row right">
                    <div className="col-12 text">
                        <div className="text-wrapper">
                            <div className="image-side">
                                <img src={require("../media/clip-list-is-empty@2x.png")}/>
                            </div>
                            <div className="text-side">
                                <h3 className="step">
                                    Step 8
                                </h3>
                                <Link to={`/${this.props.match.params.lang}/page3`}>
                                    <h4 className="step2">
                                        {this.state.data.title8}
                                    </h4>
                                </Link>
                                <p className="">
                                    {this.state.data.text8}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row left">
                    <div className="col-12 text">
                        <div className="text-wrapper">
                            <div className="text-side">
                                <h3 className="step">
                                    Step 9
                                </h3>
                                <Link to={`/${this.props.match.params.lang}/page3`}>
                                    <h4 className="step2">
                                        {this.state.data.title9}
                                    </h4>
                                </Link>
                                <p className="">
                                    {this.state.data.text9}
                                </p>
                            </div>
                            <div className="image-side">
                                <img src={require("../media/clip-waiting@2x.png")}/>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to={`/${this.props.match.params.lang}/About`}>
                    <div className="row drop">
                        <div>
                            <i className="fas fa-chevron-circle-up"></i>
                        </div>
                        <div>
                            <p className="show">Show more</p>
                        </div>
                    </div>
                </Link>
                <h4 className="downInfo">
                    Useful articles for you
                </h4>
                <div className="row rowImageDown justify-content-center ">
                    <div className="img1 col-4 justify-content-center">
                        <div className="d-flex justify-content-center"><img
                            src={require("../media/Ellipse 345@2x.png")}/></div>
                        <h5>
                            Change the name
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo. Verear
                        </p>
                    </div>
                    <div className="img2 col-4 justify-content-center">
                        <div className="d-flex justify-content-center"><img
                            src={require("../media/Ellipse 347@2x.png")}/></div>
                        <h5>
                            Notification of citizenship
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo. Verear
                        </p>
                    </div>
                    <div className="img3 col-4 justify-content-center">
                        <div className="d-flex justify-content-center"><img
                            src={require("../media/Ellipse 344@2x.png")}/></div>
                        <h5>
                            The 4 generation
                        </h5>
                        <p style={{paddingBottom: '10px'}}>
                            Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo. Verear
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="prevNext">
                        {/*<i className="fas fa-arrow-circle-left"></i>*/}
                    </div>
                    <div className="prevNext">
                        {/*<i className="fas fa-arrow-circle-right"></i>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutFull;