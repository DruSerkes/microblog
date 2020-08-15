import React from 'react';
import { Formik, Form } from 'formik';
import FormikInput from './FormikInput';
import commentSchema from './commentSchema';

const CommentForm = ({ addComment }) => {
	const handleSubmit = (values, { setSubmitting, resetForm }) => {
		addComment(values.text);
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
