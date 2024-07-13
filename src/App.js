import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content) => {
    setNotes([...notes, { title, content }]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <header className="d-flex justify-content-between align-items-center p-3">
        <h1>Notes Keeping Website</h1>
        <button className="btn btn-secondary" onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <NoteList notes={notes} deleteNote={deleteNote} />
      <NoteForm addNote={addNote} />
    </div>
  );
};

export default App;
