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
    <section className="mb-8 flex gap-5">
      <div className="shrink-0">
        <img src={avatar} alt="avatar" className="size-[70px] rounded-full" />
      </div>
      <div>
        <h1 className={`${darkMode ? 'text-white' : 'text-gunMetal'} text-lg font-bold`}>
          {name ?? `Not Available`}
        </h1>
        <p className="text-sm text-azure">{username ? `@${username}` : `Not Available`}</p>
        <span className={`${darkMode ? 'text-white' : 'text-gunMetal'} text-sm`}>
          {formattedDate ? `${formattedDate}` : `Not Available`}
        </span>
      </div>
    </section>
  );
}

export default UserName;
