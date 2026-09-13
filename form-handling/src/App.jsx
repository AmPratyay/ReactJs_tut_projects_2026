import { useState } from "react";
import "./App.css";

function App() {

  const [title, setTitle] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted by ",title);
    setTitle('')
  };

  return (
    <>
      <form className="formData" onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <br />

        <input
          className="inputData"
          type="text"
          placeholder="Enter your name"
          id="fname"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <br />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
