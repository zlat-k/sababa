import React from "react";
import './heder.css'
import {Link, withRouter } from "react-router-dom";
import DropdownLang from "./dropdownlang";


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    changeLang=(str)=>{
    let a = this.props.location.pathname;
   return    `/${str}${a.slice(3)}`;

};


    render() {
        console.log(this.props)
       const lang = this.props.location.pathname.slice(0,3)
        return (
            <div className="header">
                <Link className="noStyle" to={`${lang}`}>
                    <img src={require("../media/Logo@2x.png")}/>
                </Link>
                <Link to={`${lang}`}>Home</Link>
                <Link to={`${lang}/About`}>About</Link>
                <Link to={`${lang}/page6`}>Blog</Link>
                <input type="text" id="search" placeholder='Search'/>
                <div className='dropdownL'>
                    <DropdownLang changeLang={this.changeLang} />
                </div>
            </div>
        );
    }
}

export default withRouter(Header)
