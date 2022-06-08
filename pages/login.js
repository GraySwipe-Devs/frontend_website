import React, { useState } from 'react';
import { auth } from '../firebase';
const login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        try {
            const result = await auth.signInWithEmailAndPassword(email, password)

        } catch (e) {
            console.log(e);
            console.log("failed");
        }
        console.log("Login Success");
    }

    return (
        <>

            <h1 className='font-mono' >This is login page</h1>
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <input className='border-solid border-2 border-black' type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br />
                    <input className='border-solid border-2 border-black' type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='border-solid border-2 border-sky-500 bg-yellow-300 p-4' type='submit'>Login</button>
            </form>
        </>
    )
}

export default login