import React from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../../Hooks/UseFireBase';
import './Header.css'
const Header = () => {
    const { user, handleSignOut } = useFireBase()
    return (
        <div className='header'>
            <nav>
                <Link to={'/'}> Home </Link>
                <Link to={'/home'}> Home </Link>
                <Link to={'/products'}> Products </Link>
                <Link to={'/order'}> Orders </Link>
                <Link to={'/register'}> Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ? <button onClick={handleSignOut}>Sing Out</button> :
                        <Link to={'/login'}> Log In</Link>}
            </nav>
        </div>
    );
};

export default Header;