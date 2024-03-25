import PropTypes from 'prop-types';
import po from '../../assets/images/ensarioPo2.jpg';

// Componente CardComponentSale com tamanho quadrado
const CardComponentProduct = ({ product, description, imageUrl, onButtonClick }) => {
  const handleClick = () => {
    onButtonClick();
  };

  return (
<div className="max-w-48 h-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center " >
  <a href="#">
    <div className="aspect-w-1 aspect-h-1">
      <img className="object-cover rounded-t-lg" src={po} alt="colar frida" />
    </div>
    <div className="p-2 flex flex-col justify-center items-center">
      <p className="mb-3 text-amber-900 dark:text-gray-400 text-center">ORGÂNICA</p>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-950 dark:text-gray text-center">nome do produto{product}</h5>
      <p className="mb-3 text-gray-950 dark:text-gray-400 text-center">preço{product}</p>
    </div>
  </a>
</div>

  );
}

// PropTypes para CardComponentProduct
CardComponentProduct.propTypes = {
  category: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default CardComponentProduct;
