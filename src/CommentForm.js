import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { v4 as uuid } from 'uuid';
import FormikInput from './FormikInput';
import commentSchema from './commentSchema';

const CommentForm = ({ addComment }) => {
	const { id } = useParams();
	const handleSubmit = (values, { setSubmitting, resetForm }) => {
		const commentId = uuid();
		const { text } = values;
		addComment(id, commentId, text);
		setSubmitting(false);
		resetForm();
	};

	return (
		<Formik initialValues={{ text: '' }} validationSchema={commentSchema} onSubmit={handleSubmit}>
			<Form>
				<FormikInput placeholder="New Comment" name="text" type="text" />
				<button type="submit">Add</button>
			</Form>
		</Formik>
	);
};

export default CommentForm;
