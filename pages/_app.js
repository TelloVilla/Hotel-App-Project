import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.sass'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  
  useEffect(()=>{
    import ('bootstrap/dist/js/bootstrap');
    toast({ type: "info", message: "Hello world!" });
  }, [])


  return (<>
    <Component {...pageProps} />
    <ToastContainer
        />
        </>)
}

export default MyApp