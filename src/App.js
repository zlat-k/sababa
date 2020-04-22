import React from 'react';
import './App.css';
import Header from "./heder/heder";
import Mains from "./main/main";
import Footer from "./footer/footer";
import Page1 from "./page1/AboutShort";
import AboutFull from "./page2/AboutFull";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Page6 from "./page6/page6";
import Page7 from "./page7/page7";
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

