import UserName from './UserName';
import UserBio from './UserBio.jsx';
import UserStatistics from './Statistics/UserStatistics.jsx';
import UserDetails from './UserDetails.jsx';
import Loader from '../Loader.jsx';
import ErrorMessage from '../ErrorMessage.jsx';
import WelcomeMessage from '../WelcomeMessage.jsx';
import InputError from '../InputError.jsx';

function UserProfile({ profileData, isLoading, error, darkMode, welcomeMessage, inputError }) {
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    html_url,
    twitter_username,
    company,
  } = profileData;

  const hasProfileData = Object.keys(profileData).length > 0;

  return (
    <section
      className={`${darkMode ? 'bg-yankeesBlue' : 'bg-offWhite shadow-custom'} relative min-h-8 rounded-[15px] px-6 py-8 transition-all duration-200 md:p-10 lg:px-0 lg:py-11`}>
      {/* if there is an error, show the error*/}
      {error && <ErrorMessage message={error} darkMode={darkMode} />}

      {/* if the data is loading, show the loader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader />
        </div>
      )}

      {/* if there is no data, no error, the loading state is false and there is no input error, show the welcome message */}
      {!isLoading && !hasProfileData && !error && !inputError && welcomeMessage && (
        <WelcomeMessage darkMode={darkMode} />
      )}

      {/* if there is no data, no error, the loading state is false and there is an input error, show the input error message */}
      {!isLoading && !hasProfileData && !error && !welcomeMessage && inputError && (
        <InputError darkMode={darkMode} />
      )}

      {/* if there is data, no error and the loading state is false, show the user profile */}
      {!isLoading && !error && hasProfileData && (
        <>
          <UserName
            avatar={avatar_url}
            name={name}
            username={login}
            date={created_at}
            darkMode={darkMode}
          />
          <section className="lg:pl-[206px] lg:pr-12">
            <UserBio bio={bio} darkMode={darkMode} />
            <UserStatistics
              repos={public_repos}
              followers={followers}
              following={following}
              darkMode={darkMode}
            />
            <UserDetails
              city={location}
              url={html_url}
              twitter={twitter_username}
              company={company}
              darkMode={darkMode}
            />
          </section>
        </>
      )}
    </section>
  );
}

export default UserProfile;
