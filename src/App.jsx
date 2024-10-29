// src/App.js
import { useState } from 'react';


const App = () => {
  const [people, setPeople] = useState([
    { name: 'Hassan', votes: 0 },
    { name: 'Peter', votes: 0 },
    { name: 'Jane', votes: 0 },
    { name: 'Otieno', votes: 0 },
    { name: 'Wanjiku', votes: 0 },
  ]);

  const vote = (index) => {
    const newPeople = [...people];
    newPeople[index].votes += 1;
    setPeople(newPeople);
  };

  const resetVotes = () => {
    const resetPeople = people.map((person) => ({ ...person, votes: 0 }));
    setPeople(resetPeople);
  };

  const getTotalVotes = () => {
    return people.reduce((total, person) => total + person.votes, 0);
  };

  const getMostVotedPerson = () => {
    const maxVotes = Math.max(...people.map(person => person.votes));
    return people.find(person => person.votes === maxVotes)?.name || "None";
  };

  return (
    <div className="container">
      <h1>Vote for Your Favorite Candidate!</h1>

      <div className="vote-info">
        <p>Total Votes: <strong>{getTotalVotes()}</strong></p>
        <p>Most Voted Person: <strong>{getMostVotedPerson()}</strong></p>
        <button className="reset-btn" onClick={resetVotes}>Reset Votes</button>
      </div>

      <div className="people">
        {people.map((person, index) => (
          <div
            key={index}
            className={`person ${person.votes === Math.max(...people.map(p => p.votes)) ? 'highlight' : ''}`}
          >
            <div className="voteCount">{person.votes}</div>
            <div className="personName">{person.name}</div>
            <button onClick={() => vote(index)}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
