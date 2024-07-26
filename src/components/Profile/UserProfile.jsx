import UserName from './UserName';
import UserBio from './UserBio.jsx';
import UserStatistics from './Statistics/UserStatistics.jsx';
import UserDetails from './UserDetails.jsx';
import Loader from '../Loader.jsx';
import ErrorMessage from '../ErrorMessage.jsx';
import Introduction from '../Introduction.jsx';

function UserProfile({ profileData, isLoading, error, darkMode }) {
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
      className={`${darkMode ? 'bg-yankeesBlue' : 'bg-offWhite shadow-custom'} relative min-h-8 rounded-[15px] px-6 py-8 transition-all duration-200`}>
      {/* if there is an error, show the error*/}
      {error && <ErrorMessage message={error} />}
      {/* if the data is loading, show the loader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader />
        </div>
      )}
      {/* if there is no data, no error and the loading stat is false, show the welcome message */}
      {!isLoading && !hasProfileData && !error && <Introduction />}
      {/* if there is data, and the error and loading states are set to false, show the user profile */}
      {!isLoading && !error && hasProfileData && (
        <>
          <UserName
            avatar={avatar_url}
            name={name}
            username={login}
            date={created_at}
            darkMode={darkMode}
          />
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
        </>
      )}
    </section>
  );
}

export default UserProfile;
