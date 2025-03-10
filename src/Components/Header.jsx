import React, { useState } from 'react';
import { MdOutlineChecklist } from "react-icons/md";

const Header = () => {
  const [text, setText] = useState(''); // Stores input value
  const [tasks, setTasks] = useState([]); // Stores list of tasks

  // ✅ Add a new task
  const addTask = () => {
    if (text.trim() !== "") { 
      setTasks([...tasks, text]); 
      setText(""); // Clear input after adding
    }
  };

  // ✅ Reset all tasks
  const resetTask = () => {
    setTasks([]); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400 px-4">
      {/* Main Container */}
      <div className="bg-white w-full max-w-md md:max-w-lg lg:max-w-xl p-6 rounded-xl shadow-2xl 
      flex flex-col gap-4">

        {/* Title */}
        <div className="flex items-center gap-2">
          <p className="text-blue-950 font-semibold text-2xl">To-Do List</p>
          <MdOutlineChecklist className="h-8 w-8" />
        </div>

        {/* Input & Buttons */}
        <div className="flex flex-col md:flex-row gap-2">
          <input 
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-12 w-full border border-gray-300 rounded-lg p-3 text-lg"
            type="text"
            placeholder="Add a new task"
          />
          <button 
            onClick={addTask} 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
          <button 
            onClick={resetTask} 
            className="bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600"
          >
            Reset
          </button>
        </div>

        {/* Task List */}
        <div className="mt-3">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center text-lg">No tasks added.</p>
          ) : (
            tasks.map((task, index) => (
              <div key={index} className="flex items-center gap-3 border-b py-2">
                <input type="checkbox" className="h-6 w-6"/>
                <p className="text-gray-800 text-lg break-words">{task}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
