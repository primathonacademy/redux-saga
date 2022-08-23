export const fetchJokeApi = () => {
  console.log('Api Call');

  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return fetch('https://icanhazdadjoke.com', config).then((res) => res.json());
};
