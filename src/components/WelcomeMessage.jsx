function WelcomeMessage({ darkMode }) {
  return (
    <div
      className={`${darkMode ? 'text-white' : 'text-slateGray'} flex flex-col items-center justify-center gap-5 text-slateGray`}>
      <h1 className="text-lg font-bold md:text-xl">
        Welcome to devfinder!
        <span className="ml-2 inline-block text-xl md:text-2xl">🕵️</span>
      </h1>
      <p className="text-sm md:text-lg">Easily fetch and view user profiles from GitHub!</p>
      <p className="text-sm md:text-lg">Start by entering a username in the search bar above.</p>
    </div>
  );
}

export default WelcomeMessage;
