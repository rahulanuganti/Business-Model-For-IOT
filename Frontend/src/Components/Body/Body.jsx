import React from 'react';
import styles from './Body.module.css'; // Import the CSS module
import { useNavigate } from 'react-router-dom';

const Body = () => {
  const navigate = useNavigate();

  const handleNavigateClick = (categoryName) =>{
    navigate('/Products',{state: {data: categoryName}});
  }

  return (
    <div className={styles['body-container']}>
      <button className={styles['small-button']} onClick={() => handleNavigateClick("Smart Home")}>Smart Home</button>
      <button className={styles['small-button']} onClick={() => handleNavigateClick("Defense")}>Defense</button>
      <button className={styles['small-button']} onClick={() => handleNavigateClick("Hospital")}>Hospital</button>
      <button className={styles['small-button']} onClick={() => handleNavigateClick("Agriculture")}>Agriculture</button>
      <button className={styles['small-button']} onClick={() => handleNavigateClick("Industrial")}>Industrial</button>
    </div>
  );
}

export default Body;
