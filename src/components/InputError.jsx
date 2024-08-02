function InputError({ darkMode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className={`${darkMode ? 'text-white' : 'text-slateGray'} text-sm md:text-lg`}>
        Whoops! No input? I'm lost!{' '}
        <span className="ml-2 inline-block text-xl md:text-2xl">🙈</span>
      </p>
    </div>
  );
}

export default InputError;
