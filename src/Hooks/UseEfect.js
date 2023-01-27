import React, { useState , useEffect } from "react";

const UseEfect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
      {console.log("rendering")}
      <h2>count: {count} </h2>
      <button
        onClick={() => { setCount((count) => count + 1)}}>  ++ </button>
    </div>
  );
};

export default UseEfect;
