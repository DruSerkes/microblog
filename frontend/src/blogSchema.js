import * as Yup from 'yup';

const validationSchema = Yup.object({
	title       : Yup.string().max(35, 'Must be 35 characters or less').required('Required'),
	description : Yup.string().max(70, 'Must be 70 characters or less').required('Required'),
	body        : Yup.string().required('Required')
});

export default validationSchema;
