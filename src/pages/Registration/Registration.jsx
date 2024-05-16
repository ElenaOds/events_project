import { useParams, useLocation  } from "react-router-dom";
import {  useSelector, useDispatch  } from 'react-redux';
import { createRegistration } from '../../redux/eventOperations';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { Field } from 'formik';

import ValidationSchema from './schema';
import LinkBack from '../../components/LinkBack/LinkBack';

import { Container, SectionTitle, StyledForm } from './Registration.styled';

const initialValues = {
  name: '',
  email: '',
  birthdate: '',
  info: ''
}

const Registration = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { _id } = useParams();
  const events = useSelector((state) => state.events.data);
  const event = events.find(event => event._id === _id);



  const handleSubmit = (values, {resetForm}) => {
  const updatedEvent = { ...event, participants: values };
  dispatch(createRegistration(updatedEvent));
  toast.success("Event is created");
  resetForm();

  }

  const backLinkHref = location.state?.from ?? "/events";

  return (
    <Container>
      <LinkBack backLinkHref={backLinkHref}/>

      <SectionTitle>{event.title} registration</SectionTitle>
      <Formik 
        initialValues={initialValues} 
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}>
        
        <StyledForm>
        <label htmlFor="name"><span>Full name</span>
        <Field as="textarea"
        name="name" 
        placeholder="Full name"
      />
      </label>
      <label htmlFor="email"><span>Email</span>
        <Field as="textarea"
        name="email" 
        placeholder="email"
      />
      </label>
      <label htmlFor="birthdate"><span>Birthdate</span>
        <Field 
        type="date"
        name="birthdate" 
        placeholder="birthdate"
      />
      </label>
      <div id="info" role="group">
    <p>Where did you hear about this event?</p>
    <label>
      <Field type="radio" name="info" value="social media" />
              Social media
            </label>
            <label>
              <Field type="radio" name="info" value="friends" />
              Friends
            </label>
            <label>
              <Field type="radio" name="info" value="found myself" />
              Found myself
            </label>
      </div>
      <button type="submit">Submit</button>
        </StyledForm>
    </Formik>
    </Container>
  )
}

export default Registration
