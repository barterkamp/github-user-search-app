function Logo({ darkMode }) {
  return (
    <p
      className={`${darkMode ? 'text-white' : 'text-gunMetalDark'} text-2xl font-bold text-charlestonGreen`}>
      devfinder
    </p>
  );
}

export default Logo;
