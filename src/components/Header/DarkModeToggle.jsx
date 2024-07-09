import iconMoon from '../../assets/icons/icon-moon.svg';

function DarkModeToggle() {
  return (
    <div className="flex items-center gap-4">
      <p className="font-spaceMono text-sm uppercase text-queenBlue">dark</p>
      <img src={iconMoon} alt="icon-moon" className="size-5 flex-shrink-0" />
    </div>
  );
}

export default DarkModeToggle;
