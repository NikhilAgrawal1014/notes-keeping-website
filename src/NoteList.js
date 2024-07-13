import React from 'react';
import Note from './Note';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="note-list d-flex flex-wrap justify-content-center">
      {notes.map((note, index) => (
        <Note key={index} note={note} index={index} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
