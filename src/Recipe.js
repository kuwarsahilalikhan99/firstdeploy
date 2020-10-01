import React from 'react';
import './recipe.css';
import PropTypes from 'prop-types';

class Recipe extends React.Component{
    static propTypes = {
        title:PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        ondelete: PropTypes.func.isRequired
    }
    render(){
        const {title, img, instructions, id, ondelete} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ))
        return(
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title}/>
                </div>
                <div className="content">
                    <h3 className="recipe-title">Recipe {title}</h3>
                    <h4>ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instructions: </h4>
                    <p>{instructions}</p>
                    <button type="button" onClick={()=> ondelete(id)}>Delete</button>
                </div>
            </div>
        );
    }
}
export default Recipe;
