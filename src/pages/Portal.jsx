import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';

const students = ['Aarav Sharma', 'Priya Patel', 'Rahul Singh', 'Neha Verma'];

function PortalHome() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to the Student Portal</h2>
      <p>Use the navigation links to move between the Home, Students and About pages.</p>
      <button onClick={() => navigate('/portal/students')}>View Students</button>
    </div>
  );
}

function Students() {
  return (
    <div>
      <h2>Students</h2>
      <p>Here is a simple list of students:</p>
      <ul className="student-list">
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About the Portal</h2>
      <p>This small React application demonstrates page navigation using React Router.</p>
    </div>
  );
}

function Portal() {
  const subLinkClass = ({ isActive }) => isActive ? 'sub-link active' : 'sub-link';

  return (
    <section className="card wide-card">
      <span className="tag">Practice 3</span>
      <h1>Student Portal</h1>

      <div className="sub-navigation">
        <NavLink to="/portal" end className={subLinkClass}>Home</NavLink>
        <NavLink to="/portal/students" className={subLinkClass}>Students</NavLink>
        <NavLink to="/portal/about" className={subLinkClass}>About</NavLink>
      </div>

      <div className="page-area">
        <Routes>
          <Route index element={<PortalHome />} />
          <Route path="students" element={<Students />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </section>
  );
}

export default Portal;
