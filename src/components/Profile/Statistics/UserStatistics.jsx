import StatsContainer from './StatsContainer.jsx';
import Stats from './Stats.jsx';

function UserStatistics({ repos, followers, following, darkMode }) {
  return (
    <StatsContainer darkMode={darkMode}>
      <Stats title="Repos" value={repos} darkMode={darkMode} />
      <Stats title="Followers" value={followers} darkMode={darkMode} />
      <Stats title="Following" value={following} darkMode={darkMode} />
    </StatsContainer>
  );
}

export default UserStatistics;
