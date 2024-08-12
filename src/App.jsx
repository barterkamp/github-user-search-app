import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch.jsx';
import Header from './components/Header/Header.jsx';
import SearchInput from './components/Search/SearchInput.jsx';
import UserProfile from './components/Profile/UserProfile.jsx';
import Logo from './components/Header/Logo.jsx';
import DarkModeToggle from './components/Header/DarkModeToggle.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  const [inputError, setInputError] = useState(false);

  // custom hook to fetch user data
  const { isLoading, error, profileData } = useFetch(searchQuery, setSearchInput);

  // change title based on user profile data login name
  useEffect(() => {
    if (!profileData.login) return;
    document.title = `User: @${profileData.login}`;

    return () => {
      document.title = 'GitHub User Search';
    };
  }, [profileData]);

  return (
    <div
      className={`${darkMode ? 'bg-gunMetalDark' : 'bg-ghostWhite'} wrapper flex min-h-screen flex-col items-center font-spaceMono transition-all duration-200`}>
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
            setWelcomeMessage={setWelcomeMessage}
            setInputError={setInputError}
            darkMode={darkMode}
          />
          <UserProfile
            profileData={profileData}
            welcomeMessage={welcomeMessage}
            inputError={inputError}
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
