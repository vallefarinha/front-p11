import PropTypes from 'prop-types';
import po from '../../assets/images/ensarioPo2.jpg';

// Componente CardComponentSale com tamanho quadrado
const CardComponentCategory = ({ product, description, imageUrl, onButtonClick }) => {
  const handleClick = () => {
    onButtonClick();
  };

  return (
<div className="max-w-56 h-56 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 relative" style={{ backgroundImage: `url(${po})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="absolute inset-x-0 bottom-0 h-24 bg-white bg-opacity-75 flex flex-col justify-center items-center w-full">
    <a href="#">
      
      <h5 className="text-xl font-bold tracking-tight text-gray-950 dark:text-gray text-center">NOVA COLEÇÃO{product}</h5>
      <p className="text-amber-900 dark:text-gray-400 text-center">ORGÂNICA</p>
    </a>
  </div>
</div>

  );
}

// PropTypes para CardComponentCategory
CardComponentCategory.propTypes = {
  category: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default CardComponentCategory;
