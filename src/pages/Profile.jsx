import { useRef, useState } from 'react';

function Profile() {
  const [name, setName] = useState('');
  const nameInput = useRef(null);

  const focusName = () => {
    nameInput.current.focus();
  };

  const clearName = () => {
    setName('');
    nameInput.current.focus();
  };

  return (
    <section className="card">
      <span className="tag">Practice 2</span>
      <h1>Student Profile</h1>
      <p className="description">Enter your name and use the button to focus the input.</p>

      <label htmlFor="student-name">Student Name</label>
      <input
        id="student-name"
        ref={nameInput}
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <p className="saved-name">
        Saved name: <strong>{name || 'Not entered yet'}</strong>
      </p>

      <div className="button-row">
        <button onClick={focusName}>Focus Name</button>
        <button onClick={clearName} className="secondary">Clear</button>
      </div>

      <p className="small-note">The input element is accessed with React useRef.</p>
    </section>
  );
}

export default Profile;
