function ErrorMessage({ message, darkMode }) {
  return (
    <p
      className={`${darkMode ? 'text-white' : 'text-slateGray'} text-center text-sm text-slateGray md:text-lg`}>
      {message}
    </p>
  );
}

export default ErrorMessage;
