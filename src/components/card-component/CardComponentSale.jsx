import PropTypes from 'prop-types';
import ensaio from '../../assets/images/ensaioPo3.jpg';

const CardComponentSale = ({ category, description, imageUrl, onButtonClick }) => {
  const handleClick = () => {
    onButtonClick();
  };

  return (
    <div className="w-2/4 h-96 bg-white border border-gray-200 shadow  dark:bg-gray-800 dark:border-gray-700" style={{ backgroundImage: `url(${ensaio})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <div className="p-4">
        <a href="#">
          <p className="mb-3 text-lime-300 dark:text-gray-400 text-left">SALE SALE SALE</p>
        </a>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-950 dark:text-gray text-left">FRETE GRÁTIS</h5>
        <div className="text-left">
          <button
            type="button"
            onClick={handleClick}
            className="focus:outline-none text-gray-950 bg-lime-300 hover:bg-lime-300 focus:ring-4 focus:ring-lime-300 font-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-lime-900"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

// PropTypes para CardComponentSale
CardComponentSale.propTypes = {
  category: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default CardComponentSale;