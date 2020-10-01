import React from'react';
import Recipe from './Recipe';
import './Recipelist.css';
import PropTypes from 'prop-types';

class Recipelist extends React.Component{

    static propType = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
        ondelete: PropTypes.func.isRequired
    }
    render(){
        const {ondelete} = this.props;
        const recipes = this.props.recipes.map((r, index)=> (
            <Recipe key={r.id}{...r} ondelete={ondelete}/>
        ));
        return(
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default Recipelist;