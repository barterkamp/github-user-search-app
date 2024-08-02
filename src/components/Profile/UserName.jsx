const handleFormatDate = (date = 'no date input') => {
  const dateJoined = new Date(date);
  const day = dateJoined.getDate();
  const month = dateJoined.toLocaleString('default', { month: 'short' });
  const year = dateJoined.getFullYear();
  return `${day} ${month} ${year}`;
};

function UserName({ avatar, name, username, date, darkMode }) {
  const formattedDate = handleFormatDate(date);

  return (
    <section className="mb-8 flex items-center gap-x-5 md:gap-x-10 lg:mb-0 lg:items-start lg:pl-12 lg:pr-12">
      <div className="shrink-0 lg:absolute">
        <img src={avatar} alt="avatar" className="block w-[70px] rounded-full md:w-[117px]" />
      </div>
      <div className="flex w-full flex-col md:gap-1.5 lg:relative lg:pl-[158px]">
        <h1
          className={`${darkMode ? 'text-white' : 'text-gunMetal'} text-lg font-bold md:text-2xl`}>
          {name ?? `Not Available`}
        </h1>
        <p className="text-sm text-azure md:text-lg lg:mb-5">
          {username ? `@${username}` : `Not Available`}
        </p>
        <span
          className={`${darkMode ? 'text-white' : 'text-slateGray'} text-sm md:text-base lg:absolute lg:right-0 lg:top-2`}>
          {formattedDate ? `Joined ${formattedDate}` : `Not Available`}
        </span>
      </div>
    </section>
  );
}

export default UserName;
