import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { v4 as uuid } from 'uuid';
import validationSchema from './blogSchema';
import FormikInput from './FormikInput';
import MyTextArea from './FormikArea';

const BlogForm = ({ title = '', description = '', body = '', id, saveBlog }) => {
	const INITIAL_VALS = { title, description, body };
	const history = useHistory();

	const handleSubmit = (values, { setSubmitting }) => {
		if (!id) {
			values.id = uuid();
		} else {
			values.id = id;
		}
		saveBlog(values);
		setSubmitting(false);
		history.push('/');
	};

	return (
		<Formik initialValues={INITIAL_VALS} validationSchema={validationSchema} onSubmit={handleSubmit}>
			<Form>
				<FormikInput label="Title" name="title" type="text" />
				<FormikInput label="Description" name="description" type="text" />
				<MyTextArea label="Body" name="body" />
				<button type="submit" className="Save-Button">
					Save
				</button>
				<Link to="/">
					<button className="Cancel">Cancel</button>
				</Link>
			</Form>
		</Formik>
	);
};

export default BlogForm;
