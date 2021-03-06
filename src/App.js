import React, { useState } from "react";
import InputTodo from "./components/InputTodo/InputTodo";
import NotCompleted from "./components/NotCompleted/NotCompleted";
import "./App.css";
import Completed from "./components/Completed/Completed";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [notCompleted, setNotCompleted] = useState([]);
  const [completed, setCompleted] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <InputTodo
        inputText={inputText}
        setInputText={setInputText}
        notCompleted={notCompleted}
        setNotCompleted={setNotCompleted}
      />
      <NotCompleted
        notCompleted={notCompleted}
        setNotCompleted={setNotCompleted}
        completed={completed}
        setCompleted={setCompleted}
      />
      <Completed completed={completed} setCompleted={setCompleted} />
    </div>
  );
};
export default App;
