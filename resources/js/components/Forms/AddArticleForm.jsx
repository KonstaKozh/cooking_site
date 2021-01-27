import React from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { addArticle } from '../../actions/articlesActions';
import { updateUserArticlesIds } from '../../actions/usersActions';
import {
    add_article_form,
    form_item,
    form_input,
    form_textarea,
} from './AddArticleForm.module.css';

const AddArticleFormik = ({ id, addArticle, updateUserArticlesIds }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            text: '',
        },
        onSubmit: ({ name, text }) => {
            const newArticleId = '' + id;
            const newArticle = {
                id: newArticleId,
                name,
                text,
            };

            updateUserArticlesIds(newArticleId);
            addArticle(newArticle);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={add_article_form}>
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
                <label htmlFor='text'>Текст статьи</label>
                <textarea
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    className={form_textarea}
                    name='text'
                    id='text'
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
    addArticle,
    updateUserArticlesIds,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddArticleFormik);
