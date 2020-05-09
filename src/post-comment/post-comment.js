import React from "react";
import './post-comment.css';
import {withRouter} from "react-router-dom"
class PostComment extends React.Component{
    render() {
        return(
            <div className="container page7">
                <div className="row">
                    <div className="col-9">
                        <h1>
                            Change the name for new identification card (Teudat zeut).
                        </h1>
                        <h6>
                            By Adam Adams November 17,2019
                        </h6>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <i className="far fa-bookmark"></i>
                    </div>
                </div>
                <div className="row col-12">
                        <img style={{width:"60%"}} src={require("../media/Image 3@2x.png")}/>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span className="punct">Atque consectetur odio</span>
                        officia rem totam? A
                        accusantium amet blanditiis eaque, fugiat hic illum magnam officia quas quos reiciendis
                        reprehenderit sint
                        tempora?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam corporis dicta, eveniet
                        expedita id
                        iusto libero neque non, <span className="punct">numquam placeat provident</span> quasi
                        repudiandae sunt tenetur
                        ullam velit. Asperiores,
                        distinctio?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda consectetur deserunt
                        dolore
                        obcaecati quasi quibusdam soluta tempore vel veniam. Aspernatur dignissimos, distinctio
                        doloremque ex id
                        iste iusto <span className="punct">magnam quod.</span></p>
                </div>
                <div>
                    <h5>And yes, it does attach an image of you selecting a text on Medium instead of just quoting the
                        text. What a
                        mess with image & blog.</h5>
                </div>
                <h1>
                    The reasons why would you use gallery plugin
                </h1>
                <p className='pun'>
                    It is needless to say that adding <span className="punct">YouTube</span> videos is easy, but if you
                    desire to add a
                    <span className="punct">YouTube</span> video gallery on
                    your WordPress website, you will need a YouTube video gallery plugin.
                </p>
                <div>
                    <ul>
                        <li><span>Generally if you want to add more than 3 videos to demonstrate on a single page of your WordPress
                website, you must have to use a video plugin.<span className="punct">Video gallery</span> will optimize video loading for SEO and
                speed.</span>
                        </li>
                        <li><span>Video gallery plugin will optimize video loading for SEO and speed along with showing YouTube video in a
                gallery.</span>
                        </li>
                        <li><span>Generally if you want to add more than 3 videos to demonstrate on a single page of your WordPress
                website, you must have to use a video plugin.Video gallery plugin will optimize video loading for SEO
                and speed.</span>
                        </li>
                        <li><span>Video gallery plugin will optimize video loading for SEO and speed along with showing YouTube video in a
                gallery.</span>
                        </li>
                        <li><span>Generally if you want to add more than 3 videos to demonstrate on a single page of your WordPress
                website, you must have to use a video plugin.<span className="punct">Video gallery plugin</span> will optimize video loading for SEO
                and speed.</span>
                        </li>
                    </ul>
                </div>
                <p>
                    As said earlier that there are a lot of YouTube plugins available but choosing one is very much
                    tough, if you
                    like one plugin, the price might not be likely to you, or the design of that plugin won’t surprise
                    you. So I
                    will suggest you some WordPress video gallery plugin considering some factors and the factors are
                    responsive
                    design, ease of management, SEO friendliness, and most importantly price. I will talk about best
                    5 <span
                    className="punct">YouTube video
        gallery plugins</span> that will consider those.
                </p>
                <h1>
                    Conclusion
                </h1>
                <p>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I
                    will give you a complete account of the system, and expound the actual teachings of the great
                    explorer of the
                    truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
                    because it is
                    pleasure, but because those who do.
                </p>
                <div className="offset-1 col-10 offset-1">
                    <h3>
                        Comments
                    </h3>
                    <div className="row ">
                        <div className="comments col-4">
                            <img src={require("../media/christopher-campbell-va0YmkIFtPA-unsplash@2x.png")}/>
                        </div>
                        <div className="col-7">
                            <h4 className="comment1">
                                Carry Minati
                            </h4>
                            <p className='s555'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod
                                tempor invidunt
                                ut labore et .
                            </p>
                            <div className="d-flex justify-content-between">
                                <p className='s9'>
                                    Replay <i className="fas fa-share"></i>
                                </p>
                                <p className='s777'>
                                    15 June 2019
                                </p>
                            </div>
                        </div>
                    </div>
                    <h4>Leave a replay</h4>
                    <div className="form-group">
                        <label htmlFor="comment"></label>
                        <textarea className="form-control" placeholder="Your Replay" rows="5" id="comment"></textarea>
                    </div>

                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="usr"></label>
                            <input type="text" placeholder="Your Name" className="form-control" id="usr"/>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="pwd"></label>
                            <input type="email" placeholder="Your Email" className="form-control" id="pwd"/>
                        </div>
                        <label className="form-check-label offset-1 col-10 offset-1">
                            <input className="form-check-input" type="checkbox" checked/>Save my name, email, and website
                                in this browser for the
                                next time I comment.
                        </label>
                        <button type="submit"
                                className="btn btn-primary">Post Comment
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(PostComment);