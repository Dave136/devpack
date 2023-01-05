import { useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { Form, useNavigation, useSubmit } from 'react-router-dom';
import SearchSpinner from './search-spinner';

const Search = ({ q }: { q: string }) => {
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  useEffect(() => {
    const element = document.getElementById('q') as HTMLInputElement;
    element.value = q;
  }, [q]);

  return (
    <Form
      id="search-form"
      role="search"
      className="mb-4 flex items-center relative"
    >
      <input
        id="q"
        aria-label="Search data"
        className={`p-2 pl-8 border rounded-md text-sm outline-transparent transition focus:border-gray-500 dark:bg-zinc-800 dark:border-gray-600 dark:focus:border-gray-400 ${
          searching ? 'opacity-50' : ''
        }`}
        placeholder="Search"
        type="search"
        name="q"
        defaultValue={q}
        onChange={(e) => {
          const isFirstSearch = q == null;
          submit(e.currentTarget.form, {
            replace: !isFirstSearch,
          });
        }}
      />

      {searching ? (
        <SearchSpinner />
      ) : (
        <IoSearchOutline className="absolute left-2" />
      )}
      <div className="sr-only" aria-live="polite"></div>
    </Form>
  );
};

export default Search;
