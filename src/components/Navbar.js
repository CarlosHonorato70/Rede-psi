import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
    const { currentUser, logout } = useAuth();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Rede Psi</Link>
            </div>
            <div className="navbar-nav">
                {currentUser ? (
                    <>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to={`/profile/${currentUser.username}`} className="nav-link">
                            Profile
                        </Link>
                        <button onClick={logout} className="nav-link logout-btn">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;