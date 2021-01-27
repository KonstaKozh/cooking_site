import React from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { addRecipe } from '../../actions/recipesListActions';
import { updateUserRecipesIds } from '../../actions/usersActions';
import {
    add_recipe_form,
    form_item,
    form_input,
} from './AddRecipeForm.module.css';

const AddRecipeFormik = ({ id, addRecipe, updateUserRecipesIds }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            time: 0,
            difficulty: '1',
            description: '',
        },
        onSubmit: ({ name, time, difficulty, description }) => {
            const newRecipeId = '' + id;
            const newRecipe = {
                newRecipeId,
                name,
                time,
                difficulty,
                description,
            };

            updateUserRecipesIds(newRecipeId);
            addRecipe(newRecipe);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={add_recipe_form}>
            <div className={form_item}>
                <label htmlFor='name'>Название</label>
                <input
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className={form_input}
                    name='name'
                    type='text'
                    id='name'
                />
            </div>
            <div className={form_item}>
                <label htmlFor='time'>Время приготовления</label>
                <input
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    className={form_input}
                    name='time'
                    type='text'
                    id='time'
                />
            </div>
            <div className={form_item}>
                <label htmlFor='difficulty'>Сложность приготовления</label>
                <select
                    value={formik.values.difficulty}
                    onChange={formik.handleChange}
                    id='difficulty'
                >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>
            </div>
            <div className={form_item}>
                <label htmlFor='description'>Описание рецепта</label>
                <textarea
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    className={form_input}
                    name='description'
                    id='description'
                />
            </div>
            <div className={form_item}>
                <button type='submit'>Добавить рецепт</button>
            </div>
        </form>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    addRecipe,
    updateUserRecipesIds,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeFormik);
