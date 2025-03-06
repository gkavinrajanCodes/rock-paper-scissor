import './Note.css';

function Note({ feature }) {
  return (
    <div className="note-tile">
      <h3>{feature.id}</h3>
      <p>{feature.desc}</p>
    </div>
  );
}

export default Note;