import React from 'react';
import { Link } from 'react-router-dom';

import DifficultyBar from './DifficultyBar.jsx'
import { recipe_item_inner,
        recipe_item_info_block,
        recipe_item_info_block_inner,
        recipe_time } from './RecipeItem.module.css';

import { Paper } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const RecipeItem = (props) => {
    let { id, name, author, time, difficulty, rating, description, image } = props;

    let formatTime = (sourceTime) => {
        let retVal;
        if (sourceTime <= 60) {
            retVal = sourceTime + ' мин.';
        } else {
            retVal =
                Math.floor(sourceTime / 60) +
                ' ч. ' +
                (sourceTime % 60) +
                ' мин.';
        }
        return retVal;
    };

    return (
        <Paper elevation={3} square={true}> 
            <div className={recipe_item_inner}>
                <Link to={`/recipes/${id}`}>
                    <h2 className='recipe-item-header'>{name}</h2>
                </Link>
                <h4 className='recipe-item-author'>{author}</h4>
                <div className={recipe_item_info_block}>
                    <img src={image} alt='recipe'></img>
                    <div className={recipe_item_info_block_inner}>
                        <div className={recipe_time}>
                        <AccessTimeIcon />
                            <p>{formatTime(time)}</p>
                        </div>
                        <div className='recipe-difficuilty'>
                            <DifficultyBar diff={difficulty}/>
                        </div>
                        <div className='recipe-rating'>
                            <p>Рейтинг: {rating}</p>
                        </div>
                        <p className='recipe-item-text'>{description}</p>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default RecipeItem;
