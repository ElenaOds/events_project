import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    birthdate: Yup.date().required('Birth date is required'),
    info: Yup.string().oneOf(['social media', 'friends', 'found myself'], 'Please select the option').required('Please select the option'),
  });

  export default validationSchema;