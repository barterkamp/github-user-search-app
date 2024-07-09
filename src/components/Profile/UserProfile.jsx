import UserName from './UserName';
import UserDescription from './UserDescription.jsx';
import UserStatistics from './UserStatistics.jsx';
import UserDetails from './UserDetails.jsx';

function UserProfile() {
  return (
    <section className="px-6 pt-8 pb-12 rounded-[15px] bg-offWhite shadow-custom">
      <UserName />
      <UserDescription />
      <UserStatistics />
      <UserDetails />
    </section>
  );
}

export default UserProfile;
