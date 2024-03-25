import PropTypes from 'prop-types';
import CardComponentProduct from "../card-component/CardComponentProduct";

const SectionBestSellers = ({ product }) => {
  return (
    <div className="w-11/12 mx-auto mb-2">
      <h1 className="my-4 text-center text-5xl text-gray-950">Best Selling Products</h1>
      <ul className="w-full my-3 font-medium flex justify-center flex-col p-4 md:p-0 mt-4 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0">
            <li className="mx-2">
                <a href="#" className="block py-2 px-3 text-amber-950 hover:text-amber-800 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500" aria-current="page">Brincos</a>
            </li>
            <li className="hidden md:block text-amber-950">|</li>
            <li className="mx-2">
            <a href="#" className="block py-2 px-3 text-amber-950 hover:text-amber-800 md:hover:bg-transparent md:border-0 md:p-0 dark:text-amber-950 md:dark:hover:text-blue-500" aria-current="page">Colares</a>
            </li>
            <li className="hidden md:block text-amber-950">|</li>
            <li className="mx-2">
            <a href="#" className="block py-2 px-3 text-amber-950 hover:text-amber-800 md:hover:bg-transparent md:border-0 md:p-0 dark:text-amber-950 md:dark:hover:text-blue-500" aria-current="page">Anéis</a>
            </li>
            <li className="hidden md:block text-amber-950">|</li>
            <li className="mx-2">
            <a href="#" className="block py-2 px-3 text-amber-950 hover:text-amber-800 md:hover:bg-transparent md:border-0 md:p-0 dark:text-amber-950 md:dark:hover:text-blue-500" aria-current="page">Pulseiras</a>
            </li>
            <li className="hidden md:block text-amber-950">|</li>
            <li className="mx-2">
            <a href="#" className="block py-2 px-3 text-amber-950 hover:text-amber-800 md:hover:bg-transparent md:border-0 md:p-0 dark:text-amber-950 md:dark:hover:text-blue-500" aria-current="page">Casa</a>
            </li>
        </ul>
      <ul className="flex flex-wrap justify-center">
        <li className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 justify-center">
          <CardComponentProduct {...product} />
        </li>
        <li className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 justify-center">
          <CardComponentProduct {...product} />
        </li>
        <li className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 justify-center">
          <CardComponentProduct {...product} />
        </li>
        <li className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 justify-center">
          <CardComponentProduct {...product} />
        </li>
        <li className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 justify-center">
          <CardComponentProduct {...product} />
        </li>
        <li className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2 justify-center">
          <CardComponentProduct {...product} />
        </li>
        {/* Adicione mais componentes CardComponentProduct conforme necessário */}
      </ul>
    </div>
  );
}

// PropTypes para SectionBestSellers
SectionBestSellers.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default SectionBestSellers;
