import iconSearch from '../../assets/icons/icon-search.svg';
import SearchButton from './SearchButton.jsx';
import { useRef, useEffect } from 'react';

function SearchInput({
  searchInput,
  setSearchInput,
  setSearchQuery,
  setWelcomeMessage,
  setInputError,
  darkMode,
}) {
  const inputRef = useRef(null);

  // set focus directly on the input field when the page loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSearchInput(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    if (!searchInput) {
      setInputError(true);
      setWelcomeMessage(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="search-input" className="relative">
        <input
          className={`${darkMode ? 'bg-yankeesBlue text-white placeholder-white shadow-custom' : 'bg-offWhite text-charlestonGreen'} mb-4 w-full rounded-[15px] py-4 pl-10 text-lg transition-all duration-200 md:mb-6 md:py-5 md:pl-20 md:text-[18px]`}
          type="text"
          id="search-input"
          ref={inputRef}
          value={searchInput}
          onChange={handleSearchInput}
          placeholder="Search username.."
        />
        <img
          src={iconSearch}
          alt="search"
          className="absolute left-2.5 top-1/2 size-5 flex-shrink-0 -translate-y-1/2 transform md:left-4 md:left-8"
        />
        <SearchButton>Search</SearchButton>
      </label>
    </form>
  );
}

export default SearchInput;
