import React from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { addCommentary } from '../../actions/recipesListActions';

const AddCommentaryForm = ({ recipeId, addCommentary }) => {
    const formik = useFormik({
        initialValues: {
            text: '',
        },
        onSubmit: ({ text }) => {
            addCommentary(recipeId, text);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Добавить комментарий</h2>
            <textarea
                value={formik.values.text}
                onChange={formik.handleChange}
                name='text'
                placeholder='Введите комментарий...'
            />
            <button type='submit'>Отправить</button>
        </form>
    );
};

const mapDispatchToProps = {
    addCommentary,
};

export default connect(null, mapDispatchToProps)(AddCommentaryForm);
