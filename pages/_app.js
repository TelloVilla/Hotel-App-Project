import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.sass'
import {useEffect} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as React from "react"

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    toast({ type: "info", message: "Hello world!" });
  }, []);
  useEffect(()=>{
    import ('bootstrap/dist/js/bootstrap');
  }, [])


  return (
    <>
  <Component {...pageProps} />
  <ToastContainer
      />
      </>
  )  
}

export default MyApp
