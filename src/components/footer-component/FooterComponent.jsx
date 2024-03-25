import logoBlack from "../../assets/images/logo-black.jpg";

const FooterComponent = () => {
  return (
    <footer className="shadow bg-black m-0">
      <div className="w-full p-4 md:py-5">
        
        <div className="flex justify-center mb-3">
          <div className="flex flex-wrap items-center justify-center sm:justify-start text-sm font-medium  text-slate-50">
            <a
              href="https://femcoders.factoriaf5.org/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logoBlack} className="h-10" alt="Lumadre logo" />
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-3">
    <div className="flex flex-wrap items-center justify-center sm:justify-start text-sm font-medium text-white">
        <ul className="font-medium flex justify-center flex-col p-4 md:p-0 mt-4 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-black">
            <li className="mx-2">
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Sobre nós</a>
            </li>
            <li className="hidden md:block text-white">|</li>
            <li className="mx-2">
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Busca</a>
            </li>
            <li className="hidden md:block text-white">|</li>
            <li className="mx-2">
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Instagram</a>
            </li>
            <li className="hidden md:block text-white">|</li>
            <li className="mx-2">
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Whatsapp</a>
            </li>
            <li className="hidden md:block text-white">|</li>
            <li className="mx-2">
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Fale Conosco</a>
            </li>
        </ul>
    </div>
</div>  

          <div className=" w-full text-xs text-slate-50 sm:text-right dark:text-slate-50 border-t border-gray-300 pt-4">
            <a
              href="https://factoriaf5.org/"
              className="block text-center hover:underline hover:text-amber-400"
            >
              Copyright© 2024 Lumadre
            </a>
          </div>
     
      </div>
    </footer>
  );
};

export default FooterComponent;
