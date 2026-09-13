import { useState } from "react";

function App() {
  const [taskHeading, setTaskHeading] = useState("");
  const [taskDetails, setTaskDetails] = useState("");

  const [task, setTask] = useState([]);

  // Stores which task is currently being edited
  const [editIndex, setEditIndex] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    // Don't add empty tasks
    if (taskHeading.trim() === "" || taskDetails.trim() === "") {
      return;
    }

    if (editIndex !== null) {
      // UPDATE
      const updatedTasks = [...task];

      updatedTasks[editIndex] = {
        taskHeading: taskHeading,
        taskDetails: taskDetails,
      };

      setTask(updatedTasks);

      // Exit edit mode
      setEditIndex(null);
    } else {
      // ADD
      setTask([
        ...task,
        {
          taskHeading: taskHeading,
          taskDetails: taskDetails,
        },
      ]);
    }

    // Clear inputs
    setTaskHeading("");
    setTaskDetails("");
  };

  // DELETE
  const deleteTask = (index) => {
    const copyTask = [...task];

    copyTask.splice(index, 1);

    setTask(copyTask);
  };

  // EDIT
  const editTask = (index) => {
    setTaskHeading(task[index].taskHeading);
    setTaskDetails(task[index].taskDetails);

    setEditIndex(index);
  };

  return (
    <>
      {/* FORM */}

      <form
        className="w-96 mx-auto mt-20 p-6 flex flex-col gap-4 bg-gray-100 rounded-lg"
        onSubmit={submitHandler}
      >
        <label htmlFor="task">Enter Task</label>

        <input
          id="task"
          type="text"
          placeholder="Enter your task here..."
          className="p-2 border rounded"
          value={taskHeading}
          onChange={(e) => setTaskHeading(e.target.value)}
        />

        <textarea
          placeholder="Enter task details..."
          className="p-2 border rounded"
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
        />

        <button className="p-2 bg-blue-500 text-white rounded">
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </form>


      {/* TASK LIST */}

      <div className="w-96 mx-auto mt-5 flex flex-col gap-3">
        {task.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-200 rounded-lg"
          >
            <h2 className="font-bold text-lg">
              {item.taskHeading}
            </h2>

            <p className="text-gray-700">
              {item.taskDetails}
            </p>

            <div className="flex gap-2 mt-3">

              {/* EDIT BUTTON */}
              <button
                type="button"
                onClick={() => editTask(index)}
                className="px-3 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>

              {/* DELETE BUTTON */}
              <button
                type="button"
                onClick={() => deleteTask(index)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;