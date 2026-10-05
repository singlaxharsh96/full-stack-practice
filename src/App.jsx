import { NavLink, Route, Routes } from 'react-router-dom';
import Counter from './pages/Counter';
import Profile from './pages/Profile';
import Portal from './pages/Portal';
import TaskManager from './pages/TaskManager';

function Navigation() {
  const linkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar">
      <div className="brand">React Practice</div>
      <div className="nav-links">
        <NavLink to="/counter" className={linkClass}>Counter</NavLink>
        <NavLink to="/profile" className={linkClass}>Profile</NavLink>
        <NavLink to="/portal" className={linkClass}>Student Portal</NavLink>
        <NavLink to="/tasks" className={linkClass}>Task Manager</NavLink>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/portal/*" element={<Portal />} />
          <Route path="/tasks" element={<TaskManager />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
