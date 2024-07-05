import { useParams, useLocation, useNavigate } from "react-router-dom";
import {  useSelector, useDispatch  } from 'react-redux';
import { getRegistration } from '../../redux/participants/participantsOperations';
import { useFormik } from 'formik'; 
import { toast } from 'react-toastify';
import validationSchema from './schema';
import LinkBack from '../../components/LinkBack/LinkBack';

import { Container, SectionTitle, StyledForm, Label, Input, Button, RadioBtnGroup, RadioBtn, Text, StyledError, RadioError } from './Registration.styled';


const Registration = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { _id } = useParams();
  const events = useSelector((state) => state.events.data);
  const event = events.find(event => event._id === _id);

  const initialValues = {
    name: '',
    email: '',
    birthdate: '',
    info: '',
  };


  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(getRegistration({ _id: event._id, newParticipant: values }));
      formik.resetForm(); 
      toast.success("Participant is registered");
      navigate(`/events`, { replace: true });
    },
  });


  const backLinkHref = location.state?.from ?? "/events";

  return (
     <Container>
      <LinkBack backLinkHref={backLinkHref}/>

   <SectionTitle>{event.title} registration</SectionTitle>

<StyledForm onSubmit={formik.handleSubmit} autoComplete="off">
        <Label htmlFor="name"><span>Full name</span>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.name}
            touched={formik.touched.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <StyledError>{formik.errors.name}</StyledError>
          ) : null}
        </Label>
        <Label htmlFor="email"><span>Email</span>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <StyledError>{formik.errors.email}</StyledError>
          ) : null}
        </Label>
        <Label htmlFor="birthdate"><span>Date of birth</span>
          <Input
            type="date"
            id="birthdate"
            name="birthdate"
            placeholder="Enter your birthdate"
            value={formik.values.birthdate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.birthdate}
            touched={formik.touched.birthdate}
          />
          {formik.touched.birthdate && formik.errors.birthdate ? (
            <StyledError>{formik.errors.birthdate}</StyledError>
          ) : null}
        </Label>
        <RadioBtnGroup>
          <Text>Where did you hear about this event?</Text>
          <label htmlFor="info">
            <input
              type="radio"
              id="social-media"
              name="info"
              value="social media"
              checked={formik.values.info === 'social media'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.info}
              touched={formik.touched.info}
            />
            <RadioBtn>Social media</RadioBtn>
          </label>
          <label htmlFor="info">
            <input
              type="radio"
              id="friends"
              name="info"
              value="friends"
              checked={formik.values.info === 'friends'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.info}
              touched={formik.touched.info}
            />
            <RadioBtn>Friends</RadioBtn>
          </label>
          <label htmlFor="info">
            <input
              type="radio"
              id="found-myself"
              name="info"
              value="found myself"
              checked={formik.values.info === 'found myself'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.info}
              touched={formik.touched.info}
            />
            <RadioBtn>Found myself</RadioBtn>
          </label>
          {formik.touched.info && formik.errors.info ? (
            <RadioError>{formik.errors.info}</RadioError>
          ) : null}
        </RadioBtnGroup>

        <Button type="submit">Register</Button>
      </StyledForm>

    </Container>
  )
}

export default Registration;
