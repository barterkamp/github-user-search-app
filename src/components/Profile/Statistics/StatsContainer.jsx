function StatsContainer({ children, darkMode }) {
  return (
    <div
      className={`${darkMode ? 'bg-gunMetalDark' : 'bg-ghostWhite'} mb-6 grid grid-cols-3 rounded-xl px-3.5 py-5 transition-all duration-200`}>
      {children}
    </div>
  );
}

export default StatsContainer;
