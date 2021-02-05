import React from "react";
import Entry from "./Entry.jsx";
import nyscpedia from "../nyscpedia";

function createCard(nysc){
    return <Entry 
    key={nysc.id}
    name={nysc.name}
    meaning={nysc.meaning}
    description={nysc.description} />
}

function App() {
  return (  <div>
            <h1>NYSCpedia</h1>
            <dl className="dictionary">{nyscpedia.map(createCard)}</dl>
        </div>

  );
}

export default App;
