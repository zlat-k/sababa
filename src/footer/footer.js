import React from "react";
import './footer.css'
import {Link} from "react-router-dom";
class Footer extends React.Component{
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row footerList">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <p>
                                Contact Us
                            </p>
                            <ul className="footerMenu">
                                <li className="listNum"><img width="24" src="telephone.jpg" alt=""/> 034567899
                                </li>
                                <li className="listAd"><img width="24" src="placeholder_1.jpg" alt=""/> Tel Aviv,
                                    Israel</li>
                                <li className="listEmail"><img width="24" src="envelope.jpg"
                                                               alt=""/> info@sababalife.com</li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <p>
                                Our Company
                            </p>
                            <ul>
                                <Link to={'/about-short'}><li>About</li></Link>
                                <Link to={'/blog'}><li>Blog</li></Link>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <p>
                                Social Contacts
                            </p>
                            <ul>
                                <a target='_blank_' href='https://www.facebook.com'><li>Facebook</li></a>
                                <a target='_blank_' href='https://www.linkedin.com'><li>Linked In</li></a>
                                <a target='_blank_' href='https://www.youtube.com'><li>Youtube</li></a>
                                <a target='_blank_' href='https://vimeo.com'><li>Vimeo</li></a>
                                <a target='_blank_' href='https://www.skype.com'><li>Skype</li></a>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <p>
                                Address
                            </p>
                            <ul>
                                <li>
                                    SababaLife CCL<br/>
                                    Tel-Aviv Dizengof Street
                                </li>
                                <li className="follow">Follow Us</li>
                            </ul>
                            <div className="paddindImg">
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="roundhref"><a target='_blank_' href="https://www.skype.com"><i className="fab fa-skype"></i></a></div>
                                    <div className="roundhref"><a target='_blank_' href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    </div>
                                    <div className="roundhref"><a target='_blank_' href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                    </div>
                                    <div className="roundhref"><a target='_blank_' href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    );
    }
    }
export default Footer;