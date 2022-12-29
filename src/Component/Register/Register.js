import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Now</h3>
            <form action="">
                <input type="text" placeholder='Enter Your Name' />
                <br />
                <input type="email" placeholder='Enter your Email' />
                <br />
                <input type="password" placeholder='Enter your Password' id="" /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;