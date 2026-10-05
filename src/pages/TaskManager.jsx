import { useRef, useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const taskInputRef = useRef(null);

  const addTask = () => {
    const newTask = taskInput.trim();

    if (newTask === '') {
      taskInputRef.current.focus();
      return;
    }

    setTasks([...tasks, newTask]);
    setTaskInput('');
    taskInputRef.current.focus();
  };

  const clearInput = () => {
    setTaskInput('');
    taskInputRef.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <section className="card wide-card">
      <span className="tag">Practice 4</span>
      <h1>Task Manager</h1>
      <p className="description">Add simple tasks to your list using useState and useRef.</p>

      <label htmlFor="task-input">New Task</label>
      <input
        id="task-input"
        ref={taskInputRef}
        type="text"
        value={taskInput}
        onChange={(event) => setTaskInput(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a task"
      />

      <p className="task-count">Tasks: {tasks.length}</p>

      {tasks.length === 0 ? (
        <p className="empty-message">No tasks added yet.</p>
      ) : (
        <ol className="task-list">
          {tasks.map((task, index) => (
            <li key={`${task}-${index}`}>{task}</li>
          ))}
        </ol>
      )}

      <div className="button-row">
        <button onClick={addTask}>Add Task</button>
        <button onClick={clearInput} className="secondary">Clear Input</button>
      </div>

      <p className="small-note">The task list and input use useState, while useRef focuses the input.</p>
    </section>
  );
}

export default TaskManager;
