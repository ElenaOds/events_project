import { useParams, useLocation  } from "react-router-dom";
import {  useSelector, useDispatch  } from 'react-redux';
import { getRegistration } from '../../redux/participants/participantsOperations';
import { Formik } from 'formik';
// import { toast } from 'react-toastify';
import { Field } from 'formik';
import ValidationSchema from './schema';
import LinkBack from '../../components/LinkBack/LinkBack';

import { Container, SectionTitle, StyledForm, StyledError, Input, Label, Button,
   Text, RadioBtnGroup, RadioBtn,
} from './Registration.styled';



const initialValues = {
  name: '',
  email: '',
  birthdate: '',
  info: '',
}

const Registration = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { _id } = useParams();
  const events = useSelector((state) => state.events.data);
  const event = events.find(event => event._id === _id);
  // const participants = useSelector((state) => state.participants.list);

  // const handleSubmit = (values, {resetForm}) => {
  //   const newParticipant:
  //   dispatch(getRegistration({ ...participants,  values }));
   
  //   resetForm();
  // }

  const handleSubmit = (values, {resetForm}) => {
   
    dispatch(getRegistration({values}));
    // toast.success("Event is created");
    resetForm();
    console.log(values)
  
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
         {(props) => (
        <StyledForm autoComplete="off">
        <Label htmlFor="name"><span>Full name</span>
        <Input
          type="text"
          name="name" 
          id="name"
          placeholder="full name"
          onBlur={props.handleBlur}
          error={props.touched.name && props.errors.name}
        />
        <StyledError name='name' component="div"/>
      </Label>
      <Label htmlFor="email"><span>Email</span>
        <Input
        type="email"
        name="email" 
        id="email"
        placeholder="email"
        onBlur={props.handleBlur}
        error={props.touched.email && props.errors.email}
      />
      <StyledError name='email' component="div"/>
      </Label>
      <Label htmlFor="birthdate"><span>Birthdate</span>
        <Input 
        type="date"
        name="birthdate" 
        id="birthdate"
        placeholder="birthdate"
        onBlur={props.handleBlur}
        error={props.touched.birthdate && props.errors.birthdate}
      />
       <StyledError name='birthdate' component="div"/>
      </Label>
      
      
   <RadioBtnGroup id="info" role="group">
      <Text>Where did you hear about this event?</Text>
      <label>
        <Field 
        type="radio" 
        name="info" 
        value="social media" 
  
        />
        <RadioBtn>Social media</RadioBtn>

      </label> 
       <label>
        <Field 
        type="radio" 
        name="info" 
        value="friends" 
  
          />
        <RadioBtn>Friends</RadioBtn>
      </label>
      <label>
      <Field 
      type="radio" 
      name="info" 
      value="found myself" 

      />
      <RadioBtn>Found myself</RadioBtn> 
      </label> 
       
      </RadioBtnGroup>  

      <Button type="submit"
      // disabled={!(props.dirty && props.isValid)}
      >Submit</Button>
        </StyledForm>
         )}
    </Formik>  
 
    </Container>
  )
}

export default Registration;
