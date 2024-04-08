import "./App.css";
import { puppyList } from "./data";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(puppies);
  console.log(featuredPup);

  return (
    <div className="app">
      {featPupId && (
        <div className="featPup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <p
            className="pupList"
            key={puppy.id}
            onClick={() => {
              console.log("puppy.id: ", puppy.id);
              setFeatPupId(puppy.id);
            }}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
