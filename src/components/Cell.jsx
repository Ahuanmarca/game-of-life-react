function Cell(props) {
  const { alive } = props;

  const style = {
    backgroundColor: alive ? "whitesmoke" : "dimgray",
    height: "20px",
    width: "20px",
  };

  return <div style={style}></div>;
}

export default Cell;
