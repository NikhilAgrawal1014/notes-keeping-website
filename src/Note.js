import React from 'react';

const Note = ({ note, index, deleteNote }) => {
  return (
    <div className="note card m-2 p-2">
      <div className="card-body">
        <h2 className="card-title">{note.title}</h2>
        <p className="card-text">{note.content}</p>
        <button className="btn btn-danger" onClick={() => deleteNote(index)}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
