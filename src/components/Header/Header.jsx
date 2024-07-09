import Logo from './Logo.jsx';
import DarkModeToggle from './DarkModeToggle.jsx';

function Header() {
  return (
    <header className="mb-[35px] flex justify-between">
      <Logo />
      <DarkModeToggle />
    </header>
  );
}
export default Header;
