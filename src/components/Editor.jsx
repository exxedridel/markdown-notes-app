import React from "react";

const Editor = ({ currentNote, updateNote }) => {
  return (
    <section className="pane editor">
      <textarea 
        className="text-editor"
        value={currentNote.body} 
        onChange={updateNote} 
      />
    </section>
  );
};

export default Editor;
