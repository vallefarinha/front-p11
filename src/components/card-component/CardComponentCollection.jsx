import PropTypes from 'prop-types';
import branco from '../../assets/images/colarbrancoLongo.jpg';

const CardComponentCollection = ({ productName, productPrice, imageUrl, productId }) => {
  const handleClick = () => {
    onButtonClick();
  };

  return (
    <div className="w-1/3 h-96 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center" style={{ backgroundImage: `url(${branco})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
 
      <div className="px-5 py-5 flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">ORGÂNICA</h3>
        <span className="text-base text-amber-900 dark:text-gray mb-3">Nova Coleção</span>
        <div className="text-center">
          <button type="button" onClick={handleClick} className="focus:outline-none text-white bg-gray-950 hover:bg-gray-800 focus:ring-4 focus:ring-gray-950 font-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-gray-950">Comprar</button>
        </div>
      </div>
    </div>
  );
}

// PropTypes para CardComponentCollection
CardComponentCollection.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
};

export default CardComponentCollection;
