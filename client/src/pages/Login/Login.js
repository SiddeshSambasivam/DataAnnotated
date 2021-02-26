import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import JSON from 'json5';

import './style.css';

const Login = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [loggedIn, setLoginStatus] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleClick = () => {

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

                fetch("http://localhost:3000/api/fetchData", requestOptions)
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

    return (
    <>
        <div class="login-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="" placeholder="Email" onChange={handleEmail}/>
                    
                </div>
                <div class="user-box">
                    <input type="password" name="" required="" placeholder="Password" onChange={handlePass}/>
                    
                </div>
                <a href="#" onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
    </>
    )
}

export default Login;