import * as Yup from 'yup';

const commentSchema = Yup.object({
	text : Yup.string().max(180, 'Must be 180 characters or less').required('Required')
});

export default commentSchema;
