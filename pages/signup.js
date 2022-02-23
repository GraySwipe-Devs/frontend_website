import React, { useState } from 'react';
import { auth } from '../firebase';
const signup = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password, name);
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password)
            await result.user.updateProfile({
                displayName: name
            })
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <>

            <h1 className='font-mono' >This is Signup page</h1>
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <input className='border-solid border-2 border-black' type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input className='border-solid border-2 border-black' type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <input className='border-solid border-2 border-black' type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='border-solid border-2 border-sky-500 bg-yellow-300 p-4' type='submit'>Register</button>
            </form>
        </>
    )
}

export default signup