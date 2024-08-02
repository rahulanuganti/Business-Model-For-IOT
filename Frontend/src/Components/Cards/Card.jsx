import React from 'react';
import styles from './Card.module.css'; // Import the CSS module

import smartHomeImg from '../assets/Smarthome.jpg';
import defenseImg from '../assets/Defense.jpg';
import hospitalImg from '../assets/Hospital.jpg';
import agriculturalImg from '../assets/Agriculture.jpg';
import industrialImg from '../assets/Industrial.jpg';

const Content = () => {

  return (
    <div className={styles.content}>
      <h1 >Understanding the Significance of IoT</h1>
      <p>Explore how IoT is revolutionizing various industries. Click on each model to learn more about its usage and the IoT devices involved.</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={smartHomeImg} alt="Smart Home" />
          <h2>Smart Home</h2>
          <p style={{ marginTop: '28px' }}>Explore IoT in Smart Homes</p>
        </div>
        <div className={styles.card}>
          <img src={defenseImg} alt="Defense" />
          <h2>Defense</h2>
          <p>Discover IoT in Defense</p>
        </div>
        <div className={`${styles.card} ${styles.hospitalCard}`}>
          <img src={hospitalImg} alt="Hospital" className={styles.hospitalImg} />
          <h2>Hospital</h2>
          <p style={{ marginTop: '60px' }}>See IoT in Hospitals</p>
        </div>
        <div className={styles.card}>
          <img src={agriculturalImg} alt="Agricultural" />
          <h2>Agricultural</h2>
          <p style={{ marginTop: '65px' }}>Experience IoT in Agriculture</p>
        </div>
        <div className={styles.card}>
          <img src={industrialImg} alt="Industrial" />
          <h2>Industrial</h2>
          <p style={{ marginTop: '40px' }}>Learn about Industrial IoT</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
