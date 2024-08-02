import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homemain from './Components/Homemain/Homemain'
// import SmartHome from './Components/IotProducts/SmartHome'
import Login from './Components/Pages/Login/Login';
import Aboutus from './Components/Pages/AboutUs/Aboutus';
import Support from './Components/Pages/Support/Support';
import Products from './Components/IotProducts/Products';
import Admin from './Components/Admin/Admin';
import ProductDescription from './Components/productDescription/ProductDescription';
import LearnMore from './Components/Pages/LearnMoreAboutIot/LearnMore';
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homemain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/support" element={<Support />}/>
        <Route path='/products' element={<Products />} />
        <Route path='/descriptionpath' element={<ProductDescription />}/>
        <Route 
          path='/admin'
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
