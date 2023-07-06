import React,{ useState } from "react";
import './style.css'
const Login = () =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    // console.log(username);
    // console.log(password);

    //handling the info to the server
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            username: username,
            password : password
        }
        console.log({data});

        try{
            const response = await fetch('https://dummyjson.com/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result);
        }

        catch(error){
            console.log(error.message);
        }   
    }

    return(
        <div>
            <form className="form" onSubmit ={handleSubmit}>
                <h1>Login</h1>
                <input placeholder="Enter username"
                onChange ={(e)=>setUsername(e.target.value)}
                />
                <br/>
                <br/>
                <input placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <br/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
export default Login;