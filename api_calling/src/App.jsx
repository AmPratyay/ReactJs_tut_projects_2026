import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const getDataUsingAsync = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
  };

  const getDataUsingFetchThen = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const getDataUsingAxios = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    console.log(data);
  };

  const getImagesList = async () => {
    const { data } = await axios.get("https://picsum.photos/v2/list");
    console.log(data);
    setData(data);
  };

  return (
    <>
      <button className="btn" onClick={getDataUsingAsync}>
        get data using fetch async
      </button>
      <br />
      <button className="btn" onClick={getDataUsingFetchThen}>
        get data using fetch then
      </button>
      <br />
      <button className="btn" onClick={getDataUsingAxios}>
        get data using axios
      </button>
      <br />
      <button className="btn" onClick={getImagesList}>
        Get Images List
      </button>

      <div className="images_container">
        {data.map((elem, idx) => {
          return (
            <div key={elem.id}>
              <img className="images_data" src={elem.download_url} alt={elem.author} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
