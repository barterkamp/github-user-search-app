import { useState } from 'react';
import iconSearch from '../../assets/icons/icon-search.svg';
import SearchButton from './SearchButton.jsx';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  function handleSearch(e) {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }
  return (
    <form>
      <label htmlFor="search-input" className="relative">
        <input
          className="shadow-custom mb-4 w-full rounded-[15px] bg-offWhite py-4 pl-8 font-spaceMono text-sm text-charlestonGreen md:mb-6 md:py-5 md:pl-20 md:text-[18px]"
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Github username.."
        />
        <img
          src={iconSearch}
          alt="search"
          className="absolute left-2.5 md:left-8 top-1/2 size-5 flex-shrink-0 -translate-y-1/2 transform md:left-4"
        />
        <SearchButton>Search</SearchButton>
      </label>
    </form>
  );
}

export default SearchInput;
