import React, {Component} from 'react';
import Mains from "./main/main";
import AboutShort from "./page1/AboutShort";
import AboutFull from "./page2/AboutFull";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Page6 from "./page6/page6";
import Page7 from "./page7/page7";
import { Switch, Route, Redirect } from 'react-router-dom';


class Container extends Component {
    render() {
        return (

            <Switch>
                <Redirect exact from='/' to='/en' />
                <Route exact path='/:lang' component={Mains}/>
                <Route path='/:lang/About' render={AboutShort}/>
                <Route path='/:lang/About-f' component={AboutFull}/>
                <Route path='/:lang/page3' component={Page3}/>
                <Route path='/:lang/page4' component={Page4}/>
                <Route path='/:lang/page6' component={Page6}/>
                <Route path='/:lang/page7' component={Page7}/>
            </Switch>

        );
    }
}

export default Container;