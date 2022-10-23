import styles from "../styles/grid.css";
import { useState } from "react";

const Grid = () => {
  const [Count, setCount] = useState(0);
  const [MemoryData, setMemoryData] = useState([]);

  const HandleClick = (e) => {
    console.log(e.currentTarget.dataset.value);
    setCount(Count + 1);
  };
  return (
    <div className="Container">
      <div className="counter">Score: {Count}</div>
      <div className="GridContainer">
        <div className="Box" data-value="1" onClick={HandleClick}>
          1
        </div>
        <div className="Box" data-value="2" onClick={HandleClick}>
          2
        </div>
        <div className="Box" data-value="3" onClick={HandleClick}>
          3
        </div>
        <div className="Box" data-value="4" onClick={HandleClick}>
          4
        </div>
        <div className="Box" data-value="5" onClick={HandleClick}>
          5
        </div>
        <div className="Box" data-value="6" onClick={HandleClick}>
          6
        </div>
        <div className="Box" data-value="7" onClick={HandleClick}>
          7
        </div>
        <div className="Box" data-value="8" onClick={HandleClick}>
          8
        </div>
      </div>
    </div>
  );
};

export default Grid;
