export const ADD_ARTICLE = 'ADD_ARTICLE';

export const addArticle = (recipe) => ({
    type: ADD_ARTICLE,
    payload: recipe,
});