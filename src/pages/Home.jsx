import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import CardComponent from "../components/card-component/CardComponent";
// import CarouselBasicExample from "../components/banner/Banner.jsx";
import NavbarComponent from '../components/navbar-component/NavbarComponent.jsx';
import FetchApi from '../services/FetchApi';

const Home = () => {
  const navigate = useNavigate(); 
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await FetchApi.getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchCategories();
  }, []);

  
  const categoryDescription = {
    category1: "Productos ricos en proteínas vegetales para una alimentación equilibrada y saludable.",
    category2: "Productos ricos en proteínas vegetales para una alimentación equilibrada y saludable.",
    category3: "Productos de alta calidad y gran sabor, ideales para tus comidas principales.",
    category4: "Variedad de cereales integrales para una dieta rica en fibra y nutrientes esenciales.",
    category5: "Productos lácteos frescos y nutritivos para disfrutar en tus desayunos y meriendas.",
    category6: "Deliciosos snacks saludables para disfrutar en cualquier momento del día.",
    category7: "Selección de frutas y verduras frescas, ideales para una dieta balanceada y saludable.",
    category8: "Aceites naturales y saludables para cocinar y aderezar tus platos favoritos.",
  };



  const handleCategoryClick = (categoryId) => {
    navigate(`/products/category/${categoryId}`);
  };

  return (
    <>  
    <NavbarComponent/>
    {/* <CarouselBasicExample/> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-5 gap-3 place-items-center">
      {categories.map((category, index) => (
        <CardComponent 
          key={category.id} 
          category={category} 
          description={categoryDescription[`category${index + 1}`]}
          // imageUrl={categoryImage[`image${index + 1}`]} 
          onButtonClick={() => handleCategoryClick(category.id)}
        />
      ))}
    </div>
    </>
  )
}

export default Home;
