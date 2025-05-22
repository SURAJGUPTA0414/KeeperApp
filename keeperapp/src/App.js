import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";

function App() {
  let [notes, setNotes] = useState([]);


  function onClickHandler(inputText) {
    if (inputText.title.trim() === "" && inputText.content.trim() === "") {
        alert("bhai kuch to input dal....");
     return;
    }
    setNotes([...notes, inputText]);
  }


  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note) => {
        return note !== notes[id];
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={onClickHandler} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onClick={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
