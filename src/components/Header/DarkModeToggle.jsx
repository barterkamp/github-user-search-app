import iconMoon from '../../assets/icons/icon-moon.svg';
import iconSun from '../../assets/icons/icon-sun.svg';

function DarkModeToggle({ darkMode, setDarkMode }) {
  function handleDarkModeToggle() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    console.log(darkMode);
  }

  return (
    <button className="relative flex items-center gap-2.5" onClick={handleDarkModeToggle}>
      <span
        className={`${darkMode ? 'text-white' : 'text-queenBlue'} inline-block text-sm uppercase transition-colors duration-200`}>
        {darkMode ? 'light' : 'dark'}
      </span>
      <div className="relative size-5 flex-shrink-0">
        <img
          src={iconMoon}
          className={`absolute left-0 top-0 transition-opacity duration-200 ${darkMode ? 'opacity-0' : 'opacity-100'}`}
          alt="icon-moon"
        />
        <img
          src={iconSun}
          className={`absolute left-0 top-0 transition-opacity duration-200 ${darkMode ? 'opacity-100' : 'opacity-0'}`}
          alt="icon-sun"
        />
      </div>
    </button>
  );
}

export default DarkModeToggle;
