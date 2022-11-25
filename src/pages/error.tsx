import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <section className="max-w-lg mx-auto mt-52 text-center">
      <header className="flex items-center justify-center">
        <h1 className="text-3xl">Oops!</h1>
        <i className="icon-danger ml-2"></i>
      </header>
      <p className="mt-4">Sorry, an unexpected error has occurred! </p>
      <a href="/" className="mt-8 underline">
        Go to home
      </a>
    </section>
  );
};

export default ErrorPage;
