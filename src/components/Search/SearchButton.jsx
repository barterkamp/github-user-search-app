function SearchButton({ children }) {
  return (
    <button className="absolute right-2.5 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-xl bg-azure px-[18px] py-3 text-[14px] font-bold text-white hover:bg-blueJeans md:px-6 md:text-lg">
      {children}
    </button>
  );
}

export default SearchButton;
