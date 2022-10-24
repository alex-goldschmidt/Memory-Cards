import styles from "../styles/grid.css";
import { useState } from "react";

const Grid = () => {
  let [Count, setCount] = useState(0);
  let [Box1Count, setBox1Count] = useState(0);
  let [Box2Count, setBox2Count] = useState(0);
  let [Box3Count, setBox3Count] = useState(0);
  let [Box4Count, setBox4Count] = useState(0);
  let [Box5Count, setBox5Count] = useState(0);
  let [Box6Count, setBox6Count] = useState(0);
  let [Box7Count, setBox7Count] = useState(0);
  let [Box8Count, setBox8Count] = useState(0);

  const HandleBox1Click = (e) => {
    const target = e.currentTarget;
    setCount((Count += 1));
    setBox1Count((Box1Count += 1));
    if (target.classList.contains("Box1") && Box1Count >= 2 && Count >= 2) {
      setBox1Count((Box1Count = 0));
      setCount((Count = 0));
      console.log("this has been clicked twice");
    }
  };

  const HandleBox2Click = (e) => {
    const target = e.currentTarget;
    setCount((Count += 1));
    setBox2Count((Box2Count += 1));
    if (target.classList.contains("Box2") && Box2Count >= 2 && Count >= 2) {
      setBox2Count((Box2Count = 0));
      setCount((Count = 0));
      console.log("this has been clicked twice");
    }
  };

  const HandleBox3Click = (e) => {
    const target = e.currentTarget;
    setCount((Count += 1));
    setBox3Count((Box3Count += 1));
    if (target.classList.contains("Box3") && Box3Count >= 2 && Count >= 2) {
      setBox3Count((Box3Count = 0));
      setCount((Count = 0));
      console.log("this has been clicked twice");
    }
  };

  const HandleBox4Click = (e) => {
    const target = e.currentTarget;
    setCount((Count += 1));
    setBox4Count((Box4Count += 1));
    if (target.classList.contains("Box4") && Box4Count >= 2 && Count >= 2) {
      setBox3Count((Box4Count = 0));
      setCount((Count = 0));
      console.log("this has been clicked twice");
    }
  };

  const HandleBox5Click = (e) => {
    const target = e.currentTarget;
    setCount((Count += 1));
    setBox5Count((Box5Count += 1));
    if (target.classList.contains("Box5") && Box5Count >= 2 && Count >= 2) {
      setBox5Count((Box5Count = 0));
      setCount((Count = 0));
      console.log("this has been clicked twice");
    }
  };

  const HandleBox6Click = (e) => {
    const target = e.currentTarget;
    setCount((Count += 1));
    setBox6Count((Box6Count += 1));
    if (target.classList.contains("Box6") && Box6Count >= 2 && Count >= 2) {
      setBox6Count((Box6Count = 0));
      setCount((Count = 0));
      console.log("this has been clicked twice");
    }
  };

  const HandleBox7Click = (e) => {
    const target = e.currentTarget;
    setCount((Count += 1));
    setBox7Count((Box7Count += 1));
    if (target.classList.contains("Box7") && Box7Count >= 2 && Count >= 2) {
      setBox7Count((Box7Count = 0));
      setCount((Count = 0));
      console.log("this has been clicked twice");
    }
  };

  const HandleBox8Click = (e) => {
    const target = e.currentTarget;
    setCount((Count += 1));
    setBox8Count((Box8Count += 1));
    if (target.classList.contains("Box8") && Box8Count >= 2 && Count >= 2) {
      setBox8Count((Box8Count = 0));
      setCount((Count = 0));
      console.log("this has been clicked twice");
    }
  };

  return (
    <div className="Container">
      <div className="counter">Score: {Count}</div>
      <div className="GridContainer">
        <div className="Box1" data-value="1" onClick={HandleBox1Click}>
          1
        </div>
        <div className="Box2" data-value="2" onClick={HandleBox2Click}>
          2
        </div>
        <div className="Box3" data-value="3" onClick={HandleBox3Click}>
          3
        </div>
        <div className="Box4" data-value="4" onClick={HandleBox4Click}>
          4
        </div>
        <div className="Box5" data-value="5" onClick={HandleBox5Click}>
          5
        </div>
        <div className="Box6" data-value="6" onClick={HandleBox6Click}>
          6
        </div>
        <div className="Box7" data-value="7" onClick={HandleBox7Click}>
          7
        </div>
        <div className="Box8" data-value="8" onClick={HandleBox8Click}>
          8
        </div>
      </div>
    </div>
  );
};

export default Grid;
