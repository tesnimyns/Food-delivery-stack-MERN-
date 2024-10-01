import React, {  useContext, useState } from 'react'
import './LoginPopup.css'
import {  ImCross } from "react-icons/im";
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

interface LoginPopupProps {
    setShowLogin: (value: boolean) => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({setShowLogin}) => {

    const {url,setToken} =useContext(StoreContext)

    const [currState,setCurrState] = useState("Login")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

     const onChangeHandler = (event: { target: { name: any; value: any; }; })=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))

     }

    const onLogin = async (event: React.FormEvent<HTMLFormElement>)=>{

        event.preventDefault()
        let newUrl = url;
        if (currState==="Login") {
            newUrl += "/api/user/login"
        }else{
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }else{
            alert(response.data.message)
        }


    }


  return (
    <div className='login-popup'>
        <form  onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <div onClick={()=>setShowLogin(false)} className='image'> < ImCross/></div>

            </div>
            <div className="login-popup-inputs">
                {currState==="Login" ? <></>: <input
                 name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter Your Name' required />}
               
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Enter Your Email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Enter Your Password' required />

            </div>
            <button type='submit'>{currState==="Sign Up" ? "Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p> By continuing, i agree to the terms of use & privacy policy .</p>
            </div>
            {currState==="Login" ?
            <p>Create a New account ?  <span onClick={()=>setCurrState("Sign Up")}> Click here </span></p>:
            <p>Already have an account ?  <span onClick={()=>setCurrState("Login")}>  Login here</span></p>}

        </form>
      
    </div>
  )
}

export default LoginPopup
