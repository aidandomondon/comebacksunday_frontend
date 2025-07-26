import { useState } from "react";
import styles from './login.module.css'
import Link from 'next/link';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // process changes to the value of the username input field
    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    // process changes to the value of the password input field
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <div className={styles.base}>
            <h1 className={styles.pageTitle}>Welcome Back</h1>
            <form className={styles.form}>
                <div className={styles.formSection}>
                    <label>Username</label>
                    <input 
                        name="username" 
                        type="text" 
                        value={username}
                        onChange={handleUsernameChange}
                        className={styles.formInput}
                    ></input>
                </div>
                <div className={styles.formSection}>
                    <label>Password</label>
                    <input 
                        name="password" 
                        type="password" 
                        value={password}
                        onChange={handlePasswordChange}
                        className={styles.formInput}
                    ></input>
                </div>
                <button
                    type="submit"
                    className={[styles.formInput, styles.formButton].join(' ')}
                >
                    <p className={styles.formButtonText}>Log In</p>
                </button>
            </form>
            <div className={styles.redirectToRegistration}>
                <p>Don't have an account? <Link href="/register">Create one.</Link></p>
            </div>
        </div>
    );
}