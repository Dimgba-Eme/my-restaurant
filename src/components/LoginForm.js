import React from 'react'
import { useState, useEffect } from 'react';
import { validateEmail } from './Utils';

const passwordErrorMessage = () => {
    return (
        <p>The password should not have less than 8 characters</p>
    );
}

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: '',
        isTouched: false,
    });

    const getFormIsValid = () => {
        return (
            validateEmail(email) && password.value.length >= 8
        );
    };

    const fetchData = () => {
        fetch('https://randomuser.me/api/?results=1')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        document.title = 'Little Lemon | Login';
    }, []);

    const clearForm = (e) => {
        setEmail("");
        setPassword({
            value: '',
            isTouched: false,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        alert('Logged In');
    }

    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Login</h1>
                    <label htmlFor='email'>Email <sup>*</sup></label>
                    <br />
                    <input type='email' placeholder='Enter your email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <br />

                    <label htmlFor='pwd'>Password <sup>*</sup></label>
                    <br />
                    <input type='password' placeholder='Enter your password' id='pwd' value={password.value} onChange={e => setPassword({ ...password, value: e.target.value })} onBlur={() => setPassword({ ...password, isTouched: true })} />
                    {password.value.length < 8 && password.isTouched ? passwordErrorMessage : null}
                    <br />
                    <br />

                    <button type='submit' disabled={!getFormIsValid()}>SEND</button>
                </fieldset>
            </form>
        </div>
    )
}

export default LoginForm
