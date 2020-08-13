import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import validationSchema from './blogSchema';
import FormikInput from './FormikInput';

const BlogForm = ({ title = '', description = '', body = '' }) => {
	const INITIAL_VALS = { title, description, body };
	const history = useHistory();

	const handleSubmit = (values, { setSubmitting }) => {
		// do stuff with the values
		console.log(values);
		setSubmitting(false);
		history.push('/');
	};

	return (
		<Formik initialValues={INITIAL_VALS} validationSchema={validationSchema} onSubmit={handleSubmit}>
			<Form>
				<FormikInput name="title" type="text" />
				<FormikInput name="description" type="text" />
				<FormikInput name="body" type="textarea" />
				<button type="submit" className="Save-Button">
					Save
				</button>
				<button className="Cancel">
					<Link to="/">Cancel</Link>
				</button>
			</Form>
		</Formik>
	);
};

export default BlogForm;
