import { useState } from "react"
import styles from "./LoginForm.module.css"

export const LoginForm = () => {
    const [username , setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "user" && password === "password" ){
            setIsLoggedIn(true);
            setMessage(`Welcome, user!`)
            setUserName("");
            setPassword("");
        } else {
            setIsLoggedIn(false);
            setMessage("Invalid username or password");
            
        }
    }


    return (
        <div className={styles.root}>
            <h1>Login Page</h1>
            <div className={styles.container}>
            {!isLoggedIn ? <div>{message}</div> : null}
          {!isLoggedIn ?  <form action="/submit-form" onSubmit={handleSubmit}>
                <div>
                    <label for='username'>Username</label>
                        <input required value={username} onChange={(e)=> setUserName(e.target.value)} type="text" placeholder="username"/>
                    
                </div>
                <div>
                    <label for='password'>Password</label>
                        <input required value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="password"/>
                    
                </div>
                <button  type="submit">Submit</button>
            </form> : null}
            {isLoggedIn ? <div>{message}</div> : null}
            </div>
        </div>
    )
}