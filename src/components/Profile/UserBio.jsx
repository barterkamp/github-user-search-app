function UserBio({ bio, darkMode }) {
  return (
    <p
      className={`${darkMode ? 'text-white' : 'text-queenBlue'} mb-6 text-sm text-queenBlue md:text-base`}>
      {bio ?? 'This profile has no bio'}
    </p>
  );
}

export default UserBio;
