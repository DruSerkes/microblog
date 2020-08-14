import React from 'react';
import { Formik, Form } from 'formik';
import { v4 as uuid } from 'uuid';
import FormikInput from './FormikInput';
import commentSchema from './commentSchema';

const CommentForm = ({ id, addComment }) => {
	const handleSubmit = (values, { setSubmitting, resetForm }) => {
		const commentId = uuid();
		values.id = commentId;
		addComment(values);
		setSubmitting(false);
		resetForm();
	};

	return (
		<Formik initialValues={{ text: '' }} validationSchema={commentSchema} onSubmit={handleSubmit}>
			<Form className="CommentForm">
				<FormikInput placeholder="New Comment" name="text" type="text" />
				<button type="submit">Add</button>
			</Form>
		</Formik>
	);
};

export default CommentForm;
