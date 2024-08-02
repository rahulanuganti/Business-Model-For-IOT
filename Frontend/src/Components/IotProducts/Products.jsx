import React from 'react';
import styles from './Products.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
// import { productsList } from '../../Services/ProductsService';
import {useState, useEffect} from 'react';

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state?.data;
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Fetch data from API
    fetch('http://localhost:9192/business/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setProducts(data);
        })
        .catch(err => {
          console.log(err);
        });
  }, []);

  const handleLearnMore =(id) =>{
    const product = products.find(item => item.id === id);
    console.log(product);
    navigate('/descriptionpath', {state : {data: product}});
  }
  const Product = ({ id, title, description, image }) => (
    <div className={styles['product']}>

      <div className={styles['product-info']}>
        <p className={styles['product-title']}>{title}</p>
        <p className={styles['product-description']}>{description}</p>
        
        <button className={styles['learn-more-button']} onClick={() => handleLearnMore(id)}>
          <span>Learn more</span>
        </button>
      </div>
      <div className={styles['product-image']}>
        <img  src={`data:image/jpeg;base64,${image}`} alt={title} />
      </div>

    </div>
  );

  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles['back-button']} onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
        </div>

        <div>
          <h2>{category}</h2>
          <div className={styles.products}>
            {filteredProducts.map(product => (
            <Product
                key={product.id}
                id={product.id}
                title={product.name}
                description={product.description}
                image={product.photo}
              />
            ))}
            </div>
        </div>
    </div>
  );
};



export default Products;
