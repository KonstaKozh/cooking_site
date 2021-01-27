import React from 'react';
import RecipeItem from '../components/RecipeItem.jsx';
import { recipies_list_wrapper,
     recipe_item,
     button_container,
     scrolling } from './RecipesList.module.css';
import { Button } from '@material-ui/core'

const RecipesList = (props) => {
    let { recipesList, loadRecipes } = props;

    let loadRecipesInner = (count) => {
        loadRecipes(3);
    }

    let renderRecipesList = () => {
        if (typeof recipesList !== 'undefined') {
            if (recipesList.length !== 0) {
                return recipesList.map((item) => {
                    return (
                        <div className={recipe_item} key={item.id}>
                            <RecipeItem
                                id={item.id}
                                name={item.name}
                                author={item.author}
                                time={item.time}
                                difficulty={item.difficulty}
                                rating={item.rating}
                                description={item.description}
                                image={item.image}
                            />
                        </div>
                    );
                });
            }
        } else {
            return <div>{'No recipes :-('}</div>;
        }
    };

    return <div className={recipies_list_wrapper}>
                <div className={scrolling}>
                    {renderRecipesList()}
                    <div className={button_container}>
                        <Button color='primary' variant='contained' onClick={() => {loadRecipesInner(3)}}>
                            Больше рецептов!
                        </Button>
                    </div>
                </div>
        </div>;
};

export default RecipesList;
