import React from "react";
import './AboutFull.css'
import {Link} from "react-router-dom";
import {url} from "../fetch";
import {Animated} from "react-animated-css";

class AboutFull extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                title1: undefined,
                text1: undefined,
                title2: undefined,
                text2: undefined
            },
            toggleButton: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false

            ]
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.lang !== this.props.match.params.lang) {
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

    // changeToggle=(index)=>{
    //     let arr;
    //     arr[index]=[...this.state.toggleButton(index)];
    //     this.setState({toggleButton:arr});
    // };
    changeToggle = (index) => {
        let arr = [...this.state.toggleButton];
        arr[index] = !this.state.toggleButton[index];
        this.setState({toggleButton: arr});
    };

    render() {
        if (this.state.data.text1 !== undefined) {
            return (
                <div className="container page1">
                    <div className="">
                        <h1><span className="about">About</span> repatriation</h1>
                    </div>
                    <div className="row">
                        <div className="offset-1 col-10 offset-1">
                            <p className="ops">But I must explain to you how all this mistaken idea of denouncing
                                pleasure
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
                                    <h4 className="step2">
                                        <Link className="text-title" to={`/${this.props.match.params.lang}/How-to`}>
                                            {this.state.data.title1}
                                        </Link>
                                    </h4>
                                    <div className="text-toggle">
                                        <Animated  animationOut="zoomOut" isVisible={!this.state.toggleButton[0]}>
                                            <span className={`${this.state.toggleButton[0] ? "text-hidden" : "text-visible"}`}>{this.state.data.text1.slice(0,300)} ...</span>
                                        </Animated>
                                        <Animated animationIn="zoomIn" isVisible={this.state.toggleButton[0]}>
                                            <span className={`${this.state.toggleButton[0] ? "text-visible" : "text-hidden"}`}>{this.state.data.text1}</span>
                                        </Animated>
                                        {/*{this.state.toggleButton[0]?this.state.data.text1:this.state.data.text1.slice(0,300)}*/}
                                        <button type="button"   onClick={()=>this.changeToggle(0)}>{this.state.toggleButton[0]? (<i className="fas fa-arrow-circle-up"></i>): (<i className="fas fa-arrow-circle-down"></i>)}</button>
                                    </div>
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
                                    <h4 className="step2">
                                        <Link className="text-title" to={`/${this.props.match.params.lang}/How-to`}>
                                            {this.state.data.title2}
                                        </Link>
                                    </h4>
                                    <div className="text-toggle">
                                        <Animated  animationOut="zoomOut" isVisible={!this.state.toggleButton[1]}>
                                            <span className={`${this.state.toggleButton[1] ? "text-hidden" : "text-visible"}`}>{this.state.data.text2.slice(0,300)} ...</span>
                                        </Animated>
                                        <Animated animationIn="zoomIn" isVisible={this.state.toggleButton[1]}>
                                            <span className={`${this.state.toggleButton[1] ? "text-visible" : "text-hidden"}`}>{this.state.data.text2}</span>
                                        </Animated>
                                        <button type="button"   onClick={()=>this.changeToggle(1)}>{this.state.toggleButton[1]? (<i className="fas fa-arrow-circle-up"></i>): (<i className="fas fa-arrow-circle-down"></i>)}</button>
                                    </div>
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
                                    <h4 className="step2">
                                        <Link className="text-title" to={`/${this.props.match.params.lang}/How-to`}>
                                            {this.state.data.title3}
                                        </Link>
                                    </h4>
                                    <div className="text-toggle">
                                        <Animated  animationOut="zoomOut" isVisible={!this.state.toggleButton[2]}>
                                            <span className={`${this.state.toggleButton[2] ? "text-hidden" : "text-visible"}`}>{this.state.data.text3.slice(0,300)} ...</span>
                                        </Animated>
                                        <Animated animationIn="zoomIn" isVisible={this.state.toggleButton[2]}>
                                            <span className={`${this.state.toggleButton[2] ? "text-visible" : "text-hidden"}`}>{this.state.data.text3}</span>
                                        </Animated>
                                        {/*{this.state.toggleButton[0]?this.state.data.text1:this.state.data.text1.slice(0,300)}*/}
                                        <button type="button"   onClick={()=>this.changeToggle(2)}>{this.state.toggleButton[2]? (<i className="fas fa-arrow-circle-up"></i>): (<i className="fas fa-arrow-circle-down"></i>)}</button>
                                    </div>
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
                                    <h4 className="step2">
                                        <Link className="text-title" to={`/${this.props.match.params.lang}/How-to`}>
                                            {this.state.data.title4}
                                        </Link>
                                    </h4>
                                    <div className="text-toggle">
                                        <Animated  animationOut="zoomOut" isVisible={!this.state.toggleButton[3]}>
                                            <span className={`${this.state.toggleButton[3] ? "text-hidden" : "text-visible"}`}>{this.state.data.text4.slice(0,300)} ...</span>
                                        </Animated>
                                        <Animated animationIn="zoomIn" isVisible={this.state.toggleButton[3]}>
                                            <span className={`${this.state.toggleButton[3] ? "text-visible" : "text-hidden"}`}>{this.state.data.text4}</span>
                                        </Animated>
                                        <button type="button"   onClick={()=>this.changeToggle(3)}>{this.state.toggleButton[3]? (<i className="fas fa-arrow-circle-up"></i>): (<i className="fas fa-arrow-circle-down"></i>)}</button>
                                    </div>
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
                                    <h4 className="step2">
                                        <Link className="text-title" to={`/${this.props.match.params.lang}/How-to`}>
                                            {this.state.data.title5}
                                        </Link>
                                    </h4>
                                    <div className="text-toggle">
                                        <Animated  animationOut="zoomOut" isVisible={!this.state.toggleButton[4]}>
                                            <span className={`${this.state.toggleButton[4] ? "text-hidden" : "text-visible"}`}>{this.state.data.text5.slice(0,300)} ...</span>
                                        </Animated>
                                        <Animated animationIn="zoomIn" isVisible={this.state.toggleButton[4]}>
                                            <span className={`${this.state.toggleButton[4] ? "text-visible" : "text-hidden"}`}>{this.state.data.text5}</span>
                                        </Animated>
                                        {/*{this.state.toggleButton[0]?this.state.data.text1:this.state.data.text1.slice(0,300)}*/}
                                        <button type="button"   onClick={()=>this.changeToggle(4)}>{this.state.toggleButton[4]? (<i className="fas fa-arrow-circle-up"></i>): (<i className="fas fa-arrow-circle-down"></i>)}</button>
                                    </div>
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
                                    <h4 className="step2">
                                        <Link className="text-title" to={`/${this.props.match.params.lang}/How-to`}>
                                            {this.state.data.title6}
                                        </Link>
                                    </h4>
                                    <div className="text-toggle">
                                        <Animated  animationOut="zoomOut" isVisible={!this.state.toggleButton[5]}>
                                            <span className={`${this.state.toggleButton[5] ? "text-hidden" : "text-visible"}`}>{this.state.data.text6.slice(0,300)} ...</span>
                                        </Animated>
                                        <Animated animationIn="zoomIn" isVisible={this.state.toggleButton[5]}>
                                            <span className={`${this.state.toggleButton[5] ? "text-visible" : "text-hidden"}`}>{this.state.data.text6}</span>
                                        </Animated>
                                        <button type="button"   onClick={()=>this.changeToggle(5)}>{this.state.toggleButton[5]? (<i className="fas fa-arrow-circle-up"></i>): (<i className="fas fa-arrow-circle-down"></i>)}</button>
                                    </div>
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
                                    <h4 className="step2">
                                        <Link className="text-title" to={`/${this.props.match.params.lang}/How-to`}>
                                            {this.state.data.title7}
                                        </Link>
                                    </h4>
                                    <div className="text-toggle">
                                        <Animated  animationOut="zoomOut" isVisible={!this.state.toggleButton[6]}>
                                            <span className={`${this.state.toggleButton[6] ? "text-hidden" : "text-visible"}`}>{this.state.data.text7.slice(0,300)} ...</span>
                                        </Animated>
                                        <Animated animationIn="zoomIn" isVisible={this.state.toggleButton[6]}>
                                            <span className={`${this.state.toggleButton[6] ? "text-visible" : "text-hidden"}`}>{this.state.data.text7}</span>
                                        </Animated>
                                        {/*{this.state.toggleButton[0]?this.state.data.text1:this.state.data.text1.slice(0,300)}*/}
                                        <button type="button"   onClick={()=>this.changeToggle(6)}>{this.state.toggleButton[6]? (<i className="fas fa-arrow-circle-up"></i>): (<i className="fas fa-arrow-circle-down"></i>)}</button>
                                    </div>
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
                                    <h4 className="step2">
                                        <Link className="text-title" to={`/${this.props.match.params.lang}/How-to`}>
                                            {this.state.data.title8}
                                        </Link>
                                    </h4>
                                    <div className="text-toggle">
                                        <Animated  animationOut="zoomOut" isVisible={!this.state.toggleButton[7]}>
                                            <span className={`${this.state.toggleButton[7] ? "text-hidden" : "text-visible"}`}>{this.state.data.text8.slice(0,300)} ...</span>
                                        </Animated>
                                        <Animated animationIn="zoomIn" isVisible={this.state.toggleButton[7]}>
                                            <span className={`${this.state.toggleButton[7] ? "text-visible" : "text-hidden"}`}>{this.state.data.text8}</span>
                                        </Animated>
                                        <button type="button"   onClick={()=>this.changeToggle(7)}>{this.state.toggleButton[7]? (<i className="fas fa-arrow-circle-up"></i>): (<i className="fas fa-arrow-circle-down"></i>)}</button>
                                    </div>
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
                                    <h4 className="step2">
                                        <Link className="text-title" to={`/${this.props.match.params.lang}/How-to`}>
                                            {this.state.data.title9}
                                        </Link>
                                    </h4>
                                    <div className="text-toggle">
                                        <Animated  animationOut="zoomOut" isVisible={!this.state.toggleButton[8]}>
                                            <span className={`${this.state.toggleButton[8] ? "text-hidden" : "text-visible"}`}>{this.state.data.text9.slice(0,300)} ...</span>
                                        </Animated>
                                        <Animated animationIn="zoomIn" isVisible={this.state.toggleButton[8]}>
                                            <span className={`${this.state.toggleButton[8] ? "text-visible" : "text-hidden"}`}>{this.state.data.text9}</span>
                                        </Animated>
                                        {/*{this.state.toggleButton[0]?this.state.data.text1:this.state.data.text1.slice(0,300)}*/}
                                        <button type="button"   onClick={()=>this.changeToggle(8)}>{this.state.toggleButton[8]? (<i className="fas fa-arrow-circle-up"></i>): (<i className="fas fa-arrow-circle-down"></i>)}</button>
                                    </div>
                                </div>
                                <div className="image-side">
                                    <img src={require("../media/clip-waiting@2x.png")}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to={`/${this.props.match.params.lang}/About`}>
                        <div className="row drop">
                            <div className="more-color">
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
                    <Link to={`/${this.props.match.params.lang}/How-to`} style={{textDecoration: 'none', link: "black"}}>
                        <div className="row">
                            <div className="col-4">
                                <div className="article-item">
                                    <div className="d-flex justify-content-center"><img
                                        src={require("../media/Ellipse 345@2x.png")}/></div>
                                    <h5>
                                        Change the name
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo.
                                        Verear
                                    </p>
                                </div>

                            </div>
                            <div className="col-4">
                                <div className="article-item">
                                    <div className="d-flex justify-content-center"><img
                                        src={require("../media/Ellipse 347@2x.png")}/></div>
                                    <h5>
                                        Notification of citizenship
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo.
                                        Verear
                                    </p>
                                </div>

                            </div>
                            <div className="col-4">
                                <div className="article-item">
                                    <div className="d-flex justify-content-center"><img
                                        src={require("../media/Ellipse 344@2x.png")}/></div>
                                    <h5>
                                        The 4 generation
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec concludaturque ndo.
                                        Verear
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Link>
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
        }else {
            return "loading"
        }
    }
}

export default AboutFull;