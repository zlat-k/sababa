import React, {Component} from 'react';
import Mains from "./main/main";
import AboutShort from "./about-short/AboutShort";
import AboutFull from "./about-full/AboutFull";
import How from "./how-to/how";
import HowToGet from "./how-to-get/how-to-get";
import Blog from "./blog/Blog";
import Page7 from "./post-comment/post-comment";
import { Switch, Route, Redirect } from 'react-router-dom';


class Container extends Component {
    render() {
        return (

            <Switch>
                <Redirect exact from='/' to='/en' />
                <Route exact path='/:lang' component={Mains}/>
                <Route path='/:lang/About' exact render={AboutShort}/>
                <Route path='/:lang/About-full' component={AboutFull}/>
                <Route path='/:lang/About/:number' component={How}/>
                <Route path='/:lang/How-to-get' component={HowToGet}/>
                <Route path='/:lang/Blog' component={Blog}/>
                <Route path='/:lang/post-comments' component={Page7}/>
            </Switch>

        );
    }
}

export default Container;