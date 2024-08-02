import React from 'react';
import styles from './ProductDescription.module.css';
import { useLocation } from 'react-router-dom';

const ProductDescription = () => {
  const location = useLocation();
  const product = location.state?.data;
  return (
    <div className={styles.container}>
      <header className={styles.header}></header>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={`data:image/jpeg;base64,${product.photo}`} alt={product.name} />
      </div>
      <h1>{product.name}</h1>
      <p className={styles.description}>
        {product.description}  
      </p>
      <h3>Key Features</h3>
      <div className={styles.features}>
        <label>
          <input type="checkbox" />
          <p>Saves energy</p>
        </label>
        <label>
          <input type="checkbox" />
          <p>Control from anywhere</p>
        </label>
        <label>
          <input type="checkbox" />
          <p>Easy installation</p>
        </label>
        <label>
          <input type="checkbox" />
          <p>Energy history</p>
        </label>
      </div>
      <h3>User Ratings</h3>
      <div className={styles.ratings}>
        <div className={styles.ratingOverview}>
          <p className={styles.ratingValue}>{product.rating}</p>
          <div className={styles.stars}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Z"></path>
            </svg>
          </div>
        </div>
        <div className={styles.ratingBars}>
          <div className={styles.bar}>
            <div className={styles.barLabel}>5</div>
            <div className={styles.barTrack}>
              <div className={styles.barFill} style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className={styles.bar}>
            <div className={styles.barLabel}>4</div>
            <div className={styles.barTrack}>
              <div className={styles.barFill} style={{ width: '20%' }}></div>
            </div>
          </div>
          <div className={styles.bar}>
            <div className={styles.barLabel}>3</div>
            <div className={styles.barTrack}>
              <div className={styles.barFill} style={{ width: '7%' }}></div>
            </div>
          </div>
          <div className={styles.bar}>
            <div className={styles.barLabel}>2</div>
            <div className={styles.barTrack}>
              <div className={styles.barFill} style={{ width: '2%' }}></div>
            </div>
          </div>
          <div className={styles.bar}>
            <div className={styles.barLabel}>1</div>
            <div className={styles.barTrack}>
              <div className={styles.barFill} style={{ width: '1%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
