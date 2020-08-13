import React from 'react';
import { Formik, Form } from 'formik';
import validationSchema from './blogSchema';
import FormikInput from './FormikInput';

const BlogForm = ({ title = '', description = '', body = '' }) => {
	const INITIAL_VALS = { title, description, body };

	const handleSubmit = (values, { setSubmitting }) => {
		// do stuff with the values
		console.log(values);
		setSubmitting(false);
	};

	return (
		<Formik initialValues={INITIAL_VALS} validationSchema={validationSchema} onSubmit={handleSubmit}>
			<Form>
				<FormikInput name="title" type="text" />
				<FormikInput name="description" type="text" />
				<FormikInput name="body" type="textarea" />
			</Form>
		</Formik>
	);
};

export default BlogForm;
