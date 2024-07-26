function UserBio({ bio, darkMode }) {
  return (
    <p className={`${darkMode ? 'text-white' : 'text-queenBlue'} mb-6 text-sm text-queenBlue`}>
      {bio ?? 'No bio available'}
    </p>
  );
}

export default UserBio;
