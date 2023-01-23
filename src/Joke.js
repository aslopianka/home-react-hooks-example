import React, { useEffect, useState } from 'react';
import './App.css';

function Joke() {
  const [joke, setJoke] = useState({});
  //   const fetchJoke = async () => {
  //     const response = await fetch(
  //       'https://official-joke-api.appspot.com/jokes/random'
  //     );
  //     const jsonResponse = await response.json();
  //     setJoke(jsonResponse);
  //   };
  //   useEffect(() => {
  //     fetchJoke();
  //   }, []);
  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then((response) => response.json())
      //   this line basically turns my api response into an json object
      // (this is a promise) which is why you need a second .then here to
      // use the response ; an alternative way would be to write an async fct with await
      //   --> see comment above
      .then((json) => {
        // console.log('joke json', json);
        setJoke(json);
      });
  }, []);
  const { setup, punchline } = joke;
  return (
    <div className='Joke'>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p>{punchline}</p>
    </div>
  );
}

export default Joke;
