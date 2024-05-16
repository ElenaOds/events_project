import * as yup from 'yup';

const format = /^[A-Za-zА-Яа-яЁёІіЇїЄє '-]+$/;

const ValidationSchema = yup.object({
    name: yup.string().matches(format, 'Only letters are allowed').min(3, 'Name should not be shorter than 3 characters').max(25, 'Name should not be longer than 25 characters').required('Please type your full name'),
    email: yup.string().email().required('Please type your email'),
    date: yup.date().required('Please type or select date of birth'),
    priority: yup.string().oneOf(['social media', 'friends', 'found myseld'], 'Please select the option').required(),
  });

  export default ValidationSchema;