import React, { useEffect } from "react";
import { connect } from "react-redux";
// import RecipesList from "../components/RecipesList.jsx";
import { fetchRecipes, renderRecipes } from "../actions/recipesListActions.js";

const Recipes = ({ recipesList, renderRecipes, fetchRecipes }) => {
    useEffect(() => {
        fetchRecipes();
    }, []);

    const loadRecipes = (count) => {
        renderRecipes(count);
    };

    return (
        <>
            <h1>Рецепты</h1>
            <div>
                <h2>Категории</h2>
                <div></div>
            </div>
            {/* <RecipesList recipesList={recipesList} loadRecipes={loadRecipes} /> */}
            {recipesList ? (
                <div>
                    {recipesList.map((recipe, i) => (
                        <div
                            style={{
                                border: "1px solid black",
                                padding: "10px",
                                marginBottom: "10px",
                            }}
                            key={recipe.id}
                        >
                            <p>№ {i + 1}</p>
                            <p>Название: {recipe.name}</p>
                            <p>Описание: {recipe.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Рецепты загружаются</div>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    recipesList: state.recipes,
});

export default connect(mapStateToProps, { renderRecipes, fetchRecipes })(
    Recipes
);
