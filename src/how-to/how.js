import React from "react";
import './how.css'
import {withRouter} from "react-router-dom";
import {url} from "../fetch";

class How extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data:undefined
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
            .then(data => {console.log("d");this.setState({

                data: data

            })})
            .catch((e) => console.log(e));
    };






    render() {
        console.log(this.props.page);
        let num=this.props.match.params.number;
        return(

            <div className="container page3">
                <div className="">
                    <h1><span className="about">How to get Teudat zeut?</span></h1>
                </div>
                <div className="row">
                    <div className="offset-2 col-8 offset-2">
                        <p className="ops">
                            Watch our video tutorial. In it you will find a lot of useful information about how to get
                            an
                            ID card. Or read the detailed step-by-step guide below.
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bS5P_LAqiVg" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className="row row1 offset-1 col-10 offset-1">
                    <div className=" text">
                        <h3 className="step">
                            Step {num}
                        </h3>
                        <h4 className="step2">
                            {this.state.data && this.state.data.steps[num-1].title}
                        </h4>
                        <p className="blocks">
                            {this.state.data && this.state.data.steps[num-1].description}
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-center clip">
                    <img src={require("../media/clip-done@2x.png")}/>
                </div>
                <div className="row row1 offset-1 col-10 offset-1 ">
                    <div className="offset-5 col-7 text2">
                        <h4 className="step2">
                            Find department
                        </h4>
                        <p className="blocks">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto error fuga, incidunt
                            ipsa quae
                            sequi. Accusamus aliquid aspernatur assumenda est inventore quaerat quidem suscipit tenetur?
                            Debitis
                            nihil odit similique! Ipsam.
                        </p>
                    </div>
                </div>
                <div className="input-group mb-3 searcH">
                    <input type="" className="form-control" placeholder="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-success" type="submit">Go
                            </button>
                        </div>
                </div>
                <div className="map">

                </div>
            </div>
        );
    }
}
export default withRouter(How);