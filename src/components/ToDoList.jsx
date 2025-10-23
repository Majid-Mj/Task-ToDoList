import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTask] = useState(["take sofjf", "akfnkanf", "finalset"]);
  const [newTask, setNewTask] = useState("");

  function handleInputTasks(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return; 
    setTask(t => [...t, newTask]); 
    setNewTask(""); 
  }

  function deleteTask(index) {
    setTask(t => t.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index === 0) return;
    setTask(t => {
      const newTasks = [...t];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
      return newTasks;
    });
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return; 
    setTask(t => {
      const newTasks = [...t];
      [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
      return newTasks;
    });
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputTasks}
        />
        <button className="add-button" onClick={addTask}>
          ADD
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
