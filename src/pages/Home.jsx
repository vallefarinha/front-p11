import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardComponentSale from "../components/card-component/CardComponentSale.jsx";
import CardComponentCollection from "../components/card-component/CardComponentCollection.jsx";
import CardComponentBanner from "../components/card-component/CardComponentBanner.jsx";
import FetchApi from '../services/FetchApi';
import SectionBestSellers from '../components/best-sellers/SectionBestSellers.jsx';

const Home = () => {
  const navigate = useNavigate(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await FetchApi.getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>  
        <div className="flex flex-wrap justify-around mb-3">
          <CardComponentSale/>
          <CardComponentCollection/>
        </div>
        <div className="w-full flex justify-center">
        <CardComponentBanner/>
        </div>

        <SectionBestSellers/>

    </>
  )
}

export default Home;
