import React from "react";
import './Blog.css';
import {Link} from "react-router-dom";

class Blog extends React.Component{
    render() {
        return(
            <div className="container page6">
                <div>
                    <h1>Blog</h1>
                </div>
                <Link to={`/${this.props.match.params.lang}/page7`} style={{textDecoration: 'none', link: "black"}}>
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

                <Link to={`/${this.props.match.params.lang}/page7`} style={{textDecoration: 'none', link: "black"}}>
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
                <div className="d-flex justify-content-center">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </div>
            </div>

    );
    }
}
export default Blog;