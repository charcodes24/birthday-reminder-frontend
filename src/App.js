import React, {useEffect, useState } from 'react'

import './App.css';

function App() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetch('http://localhost:9393/friends/')
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);


  // const display_friends = friends.map(friend => <p>{friend.name} | {friend.birthday}</p>)


  return (
    <div className="App">
      <h1>birthdays</h1>
      {/* {display_friends} */}
    </div>
  );
}

export default App;
