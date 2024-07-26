function Introduction() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-slateGray">
      <h1 className="text-lg font-bold">
        Welcome to devfinder!
        <span className="ml-2 inline-block text-2xl">🕵️</span>
      </h1>
      <p className="text-sm">Easily fetch and view user profiles from GitHub!</p>
      <p className="text-sm">Start by entering a username in the search bar above.</p>
    </div>
  );
}

export default Introduction;
