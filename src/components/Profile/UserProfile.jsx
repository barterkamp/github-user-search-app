import UserName from './UserName';
import UserBio from './UserBio.jsx';
import UserStatistics from './UserStatistics.jsx';
import UserDetails from './UserDetails.jsx';

function UserProfile() {
  return (
    <section className="px-6 pt-8 pb-12 rounded-[15px] bg-offWhite shadow-custom">
      <UserName />
      <UserBio />
      <UserStatistics />
      <UserDetails />
    </section>
  );
}

export default UserProfile;
