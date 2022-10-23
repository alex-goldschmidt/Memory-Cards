import styles from "../styles/grid.css";

const Grid = () => {
  const handleClick = (e) => {
    console.log(e.currentTarget.dataset.value);
  };
  return (
    <div className="GridContainer">
      <div className="Box" data-value="1" onClick={handleClick}>
        1
      </div>
      <div className="Box" data-value="2" onClick={handleClick}>
        2
      </div>
      <div className="Box" data-value="3" onClick={handleClick}>
        3
      </div>
      <div className="Box" data-value="4" onClick={handleClick}>
        4
      </div>
      <div className="Box" data-value="5" onClick={handleClick}>
        5
      </div>
      <div className="Box" data-value="6" onClick={handleClick}>
        6
      </div>
      <div className="Box" data-value="7" onClick={handleClick}>
        7
      </div>
      <div className="Box" data-value="8" onClick={handleClick}>
        8
      </div>
    </div>
  );
};

export default Grid;
