import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import JSON from 'json5';

import Header from '../Landing/components/header';
import './style.css';

const Login = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [loggedIn, setLoginStatus] = useState(false);
    const [signupStatus, setsignupStatus] = useState(false);
    const [spinnerStatus, setspinnerStatus] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleSignupStatus = () => {
        setsignupStatus(!signupStatus)
    }

    const handleClick = () => {

        setspinnerStatus(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Access-Control-Allow-Origin', 'no-cors')
        
        var raw = "";

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://data-annotated.herokuapp.com/api/user/login?email="+email+"&password="+pass, requestOptions)
          .then(response => response.json())
          .then(result => {
                // console.log(result);
                const JWT = result.data.token;
                const cachedData = {
                    JWT:JWT,
                    loggedIn:false,
                    user_data:{},
                    current_task:null
                }
                localStorage.setItem("cachedData", JSON.stringify(cachedData))
                var myHeaders = new Headers();
                myHeaders.append('Access-Control-Allow-Origin', '*')
                myHeaders.append("auth-token", JWT);

                var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };

                fetch("https://data-annotated.herokuapp.com/api/fetchData", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    let cachedData = JSON.parse(localStorage.getItem("cachedData"));
                    cachedData.user_data = result.data.user;
                    cachedData.loggedIn = true;
                    localStorage.setItem("cachedData", JSON.stringify(cachedData))
                    setLoginStatus(true)
                })
                .catch(error => console.log('error', error));
            })
          .catch(error => console.log('error', error));
    }

    if(loggedIn == true){
        console.log("Logged In")
        return <Redirect to={{pathname:"/home"}} />
    }

    const spinner = (
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    )

    const loginComponent = (
        <>
        <iframe src="https://www.youtube.com/embed/9Ziy6K5ROKg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen         className="video"></iframe>
        <div class="login-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="" placeholder="Email" onChange={handleEmail}/>
                    
                </div>
                <div class="user-box">
                    <input type="password" name="" required="" placeholder="Password" onChange={handlePass}/>
                    
                </div>
                <a className="button" href="#" onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
                <span className="signup-text" >

                Don't have an account ? <a href="#" className="signup-button" onClick={handleSignupStatus}>Signup</a>
                </span>

                <div className="spinner">
                {spinnerStatus ?   spinner : null }
                </div>

            </form>
        </div>
        </>
    )

    const signupComponent = (
        <>
        <iframe src="https://www.youtube.com/embed/9Ziy6K5ROKg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen         className="video"></iframe>        
        <div class="login-box">
            <h2>Signup</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="" placeholder="Email" onChange={handleEmail}/>
                    
                </div>
                <div class="user-box">
                    <input type="password" name="" required="" placeholder="Password" onChange={handlePass}/>
                    
                </div>
                <a className="button" href="#" onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Register
                </a>
                <span className="signup-text" style={{textAlign:"center"}}>

                    Have an account? <a href="#" className="signup-button" onClick={handleSignupStatus}>Login</a>
                </span>
            </form>
        </div>
        </>
    )

    return (
    <>  
        <Header />
        {signupStatus ? signupComponent : loginComponent}
    </>
    )
}

export default Login;