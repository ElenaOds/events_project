import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Events = lazy(() => import('./pages/Events/Events'));
const Registration = lazy(() => import('./pages/Registration/Registration'));
const Participants = lazy(() => import('./pages/Participants/Participants'));

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Navigate to='events'/>}/>
        <Route path='events' element={<Events/>}/>
        <Route path='events/:_id/registration' element={<Registration/>}/> 
        <Route path='events/:_id/participants' element={<Participants/>}/> 
        </Route> 
     
    </Routes>
     
    </>
  );
}

export default App;
