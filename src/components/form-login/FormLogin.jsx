import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FetchApi from "../../services/FetchApi";

const FormLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage(""); 

    try {
      const response = await FetchApi.login(credentials);

      const { token, usertype } = response;

      localStorage.setItem("token", token);
      localStorage.setItem("usertype", usertype);

      setSuccessMessage("Login bem-sucedido. Redirecionando...");

      setTimeout(() => {
        switch (usertype) {
          case "admin":
            navigate("/");
            break;
          case "user":
            navigate("/");
            break;
          default:
            console.log("Tipo de usuário não reconhecido");
        }
      }, 2000);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage(
          "Email ou senha incorretos. Por favor, verifique suas credenciais."
        );
      } else {
        setErrorMessage(
          "Erro interno do servidor. Por favor, tente novamente mais tarde."
        );
      }
    }
  };

  useEffect(() => {
    // Limpa a mensagem de sucesso após 5 segundos
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <div>
      {errorMessage && (
        <div className="text-red-700 bg-red-300 p-3">{errorMessage}</div>
      )}

      {successMessage && (
        <div className="text-green-700 bg-green-300 p-3">{successMessage}</div>
      )}


      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-white shadow-2xl dark:border-gray-600 my-7"
      >
        <div className="mb-5 ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="femcoders@factoria.org"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Senha
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Senha"
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="focus:outline-none text-gray-950 bg-lime-300 hover:bg-lime-300 focus:ring-4 focus:ring-lime-300 font-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-lime-900"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
