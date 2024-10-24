import { useState } from 'react';

const SearchOrder = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Search order #'
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
    </form>
  );
};

export default SearchOrder;
