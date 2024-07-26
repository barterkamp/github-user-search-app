function Stats({ title, value, darkMode }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <h2 className={`${darkMode ? 'text-white' : 'text-queenBlue'} text-sm`}>{title}</h2>
      <p className={`${darkMode ? 'text-white' : 'text-gunMetal'} text-lg font-bold uppercase`}>
        {value}
      </p>
    </div>
  );
}

export default Stats;
