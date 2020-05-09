import React from 'react';
import './App.css';
import Header from "./heder/heder";
import Mains from "./main/main";
import Footer from "./footer/footer";
import Page1 from "./about-short/AboutShort";
import AboutFull from "./about-full/AboutFull";
import How from "./how-to/how";
import HowToGet from "./how-to-get/how-to-get";
import Blog from "./blog/Blog";
import Page7 from "./post-comment/post-comment";
import Container from "./container";


export class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Container/>
                <Footer/>
            </div>
        );
    }
}

