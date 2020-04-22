import React from 'react'
import {Link} from "react-router-dom";
import './dropdowmleng.css'

const languageOptions = [
    {key: 'en', text: 'English', value: 'en'},
    {key: 'fr', text: 'Français', value: 'fr'},
    {key: 'ru', text: 'Русский', value: 'ru'},
    {key: 'he', text: 'עִבְרִית', value: 'he'},
];


class DropdownLang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vision: false,

        }
    }

    setVision = () => {
        this.setState({vision: !this.state.vision})
    }

    closeVision = () => {
        this.setState({vision: false})
    }


    createList = () => {
        let opt = [];
        languageOptions.map((el, index) => {
            opt.push(
                <option
                    key={el.value}
                    data-key={el.value}
                >
                    {el.text}
                </option>
            )
        });
        return opt;
    };

    render() {
        return (

            <div className="dropdown-state">
                <button className="dropdown-buton" onClick={this.setVision}>Change Language</button>
                {this.state.vision ? <div className="dropdown-hidden">
                    <div><Link to={this.props.changeLang('en')}  onClick={this.closeVision}>en</Link></div>
                    <div><Link to={this.props.changeLang('ru')}  onClick={this.closeVision}>ru</Link></div>
                    <div><Link to={this.props.changeLang('he')}  onClick={this.closeVision}>he</Link></div>
                    <div><Link to={this.props.changeLang('fr')}  onClick={this.closeVision}>fr</Link></div>
                </div> : undefined}
            </div>

        );
    }
}

export default DropdownLang