import { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import SearchInput from './components/Search/SearchInput.jsx';
import UserProfile from './components/Profile/UserProfile.jsx';
import Logo from './components/Header/Logo.jsx';
import DarkModeToggle from './components/Header/DarkModeToggle.jsx';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [profileData, setProfileData] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!searchQuery.length) {
      setProfileData({});
      setError('');
      return;
    }

    const controller = new AbortController();

    async function fetchProfileData() {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(`https://api.github.com/users/${searchQuery}`, {
          signal: controller.signal,
        });

        if (!response.ok)
          throw new Error(
            `Oops! It looks like this user is hiding or doesn't exist. Please try again! 🕵️‍♂️`,
          );

        const data = await response.json();
        setProfileData(data);
        setError('');
        setSearchInput('');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfileData();

    return function () {
      controller.abort();
    };
  }, [searchQuery]);

  return (
    <div
      className={`${darkMode ? 'bg-gunMetalDark' : 'bg-ghostWhite'} wrapper flex min-h-screen font-spaceMono transition-all duration-200 lg:flex-col lg:items-center`}>
      <div className="container max-w-[730px] px-6 pt-8 md:px-24 md:pt-[140px] lg:px-0 lg:pt-36">
        <Header>
          <Logo darkMode={darkMode} />
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </Header>
        <main>
          <SearchInput
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setSearchQuery={setSearchQuery}
            darkMode={darkMode}
          />
          <UserProfile
            profileData={profileData}
            isLoading={isLoading}
            error={error}
            darkMode={darkMode}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
