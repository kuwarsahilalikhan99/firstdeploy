import React from 'react';
// import { render } from 'react-dom';
import './navbar.css';
import PropTypes from 'prop-types';

class navbar extends React.Component {
    static defaultProps ={
        onNewRecipe(){}
    }
    static propTypes = {
        onNewRecipe: PropTypes.func
    }
    render(){
        return(
            <header>
                <h2><a href="/">Recipe app</a></h2>
                <nav>
                    <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                </nav>
            </header>
        );
    }
}

export default navbar;