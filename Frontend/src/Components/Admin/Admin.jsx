import React, { useState, useEffect} from 'react'
import Header from '../Header/Header'
import './Admin.css';

const SuccessBanner = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Hide the banner after 5 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.banner}>
      {message}
    </div>
  );
};

const styles = {
  banner: {
    position: 'fixed',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    zIndex: 1000,
  },
};

const Admin = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const [photo, setPhoto] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('rating', rating);
    formData.append('category', category);
    formData.append('photo', photo);

    try{
      const response = await fetch('http://localhost:9192/business/add',{
        method: 'POST',
        body: formData,
      });
      if(response.ok){
        setShowBanner(true);
        // Reset form fields
        setName('');
        setDescription('');
        setRating('');
        setCategory('');
        setPhoto(null);
        console.log('Data added Sucessfully.');
      }
      else{
        console.error('Error sending the data');
      }
    }
    catch(error){
      console.error(error);
    }
  }

  return (
    <>
      <Header />
      <div className='body'>
        <div className="container">
          <div className='head'>
            <div className='head-text'>Admin</div>
            <div className="add-product">Add Product</div>
          </div>
          <div className='container-body'>
            <div className='product-info'><span></span>Product Info</div>
            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </div>
                <div className="form-section">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                </div>
                <div className="form-section">
                    <label htmlFor="rating">Rating</label>
                    <input 
                        type="number" 
                        id="rating"
                        name="rating"
                        value={rating} 
                        onChange={(e) => setRating(e.target.value)} 
                        required
                    />
                </div>
                <div className="form-section">
                    <label htmlFor="category">Category</label>
                    <input 
                        type="text" 
                        id="category"
                        name="category"
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        required
                    />
                </div>
                <div className="form-section">
                    <label htmlFor="photo">Photo</label>
                    <input 
                        type="file" 
                        id="photo"
                        name="photo"
                        onChange={(e) => setPhoto(e.target.files[0])} 
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                {showBanner && <SuccessBanner message="Data added successfully" />}
            </form>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Admin