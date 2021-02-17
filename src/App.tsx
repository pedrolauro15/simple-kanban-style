import React from "react";
import List from "./components/List";
import "./styles/app.css";

const lists = [
  { id: 2, title: "List 1", items: [1, 2] },
  { id: 2, title: "List 2", items: [1, 2, 3] },
  { id: 3, title: "List 3", items: [1, 2] },
  { id: 4, title: "List 4", items: [1, 2] },
];

const App: React.FC = () => {
  return (
    <div id="App">
      {lists.map((list) => (
        <List key={list.id} title={list.title} items={list.items} />
      ))}
    </div>
  );
};

export default App;
