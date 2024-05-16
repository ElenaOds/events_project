import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
    <Header/>
    <main>
    <Suspense fallback={<Loader/>}>
      <Outlet/>
    </Suspense>
    <ToastContainer autoClose={3000} theme="colored"/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout
