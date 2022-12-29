import React from 'react';
import { Form } from 'react-router-dom';
import useFireBase from '../../Hooks/UseFireBase';

const LogIn = () => {
    const { signInWithGoogle } = useFireBase()
    return (
        <div>
            <h1>Please Log in here</h1>
            <div>
                <button onClick={signInWithGoogle} style={{ margin: '20px' }}>Log In with Google</button>
            </div>
            <form>
                <input type="email" placeholder='Enter your Email' />
                <br />
                <input type="password" placeholder='Enter your Password' id="" /><br />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default LogIn;