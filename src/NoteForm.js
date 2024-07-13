import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addNote(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form className="note-form p-3" onSubmit={handleSubmit}>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
