import { useEffect } from "react";
import { useState } from "react";

const AppUseEffect = () => {
  const [num, setNum] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("use effect is running");
  }, [num]);

  return (
    <>
      <h1>{num}</h1>
      <button
        style={{ padding: "12px" }}
        onClick={() => {
          setNum((prev) => prev + 1);
        }}
      >
        Click here
      </button>

      <br />

      <h1>{data}</h1>
      <button
        style={{ padding: "12px" }}
        onClick={() => {
          setData((prev) => prev + 1);
        }}
      >
        Click here
      </button>
    </>
  );
};

export default AppUseEffect;
