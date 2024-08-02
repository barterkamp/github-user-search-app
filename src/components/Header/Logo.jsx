function Logo({ darkMode }) {
  return (
    <a
      href="/index.html"
      className={`${darkMode ? 'text-white' : 'text-gunMetalDark'} text-2xl font-bold text-charlestonGreen`}>
      devfinder
    </a>
  );
}

export default Logo;
