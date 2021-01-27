import { combineReducers } from 'redux';
import { recipesListReducer } from './recipesListReducer';
import { usersReducer } from './usersReducer';
import { articlesListReducer } from './articlesReducer.js'

export default combineReducers({
    recipes: recipesListReducer,
    users: usersReducer,
    articles: articlesListReducer,
});
