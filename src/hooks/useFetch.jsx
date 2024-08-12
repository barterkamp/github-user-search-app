import { useEffect, useState } from 'react';

export function useFetch(searchQuery, setSearchInput) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    if (!searchQuery.length) {
      setProfileData({});
      setError('');
      return;
    }

    const controller = new AbortController();

    async function fetchProfileData() {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(`https://api.github.com/users/${searchQuery}`, {
          signal: controller.signal,
        });

        if (!response.ok)
          throw new Error(
            `Oops! It looks like this user is hiding or doesn't exist. Please try again! 🕵️‍♂️`,
          );

        const data = await response.json();
        setProfileData(data);
        setError('');
        setSearchInput('');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfileData();

    return function () {
      controller.abort();
    };
  }, [searchQuery]);

  return { isLoading, error, profileData };
}
