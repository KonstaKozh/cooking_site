export const UPDATE_USER_RECIPES_IDS = 'UPDATE_USER_RECIPES_IDS';
export const UPDATE_USER_ARTICLES_IDS = 'UPDATE_USER_ARTICLES_IDS';

export const updateUserRecipesIds = (id) => ({
    type: UPDATE_USER_RECIPES_IDS,
    payload: id,
});

export const updateUserArticlesIds = (id) => ({
    type: UPDATE_USER_ARTICLES_IDS,
    payload: id,
});
