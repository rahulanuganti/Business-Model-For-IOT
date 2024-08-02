import React from 'react';
import styles from './header.module.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { auth, logout } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignButton = () => {
    if (isLoggedIn) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">AcmeIOT</Link>
      </div>
      <nav className={styles.nav}>

        <ul className={styles['nav-items']}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/learnmore">Learn More</Link>
          </li>

        </ul>

        {/* <div className={styles['search-bar']}>
          <input type="text" placeholder="Search..." />
        </div> */}
        <div className={styles.buttons}>
          <Link className={styles['btn-signin']} to="/login" onClick={() => {handleSignButton()}}>
            {isLoggedIn ? 'Sign Out' : 'Sign In'}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
