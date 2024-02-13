import { useState, useEffect } from "react";

function Controls(props) {
  const { setStateRows, setStateCols } = props;
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(25);

  useEffect(() => {
    setStateRows(rows);
  }, [rows, setStateRows]);

  useEffect(() => {
    setStateCols(cols);
  }, [cols, setStateCols]);

  return (
    <form>
      <fieldset>
        <label>Rows</label>
        <input
          type="number"
          min="5"
          max="50"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
        />
      </fieldset>
      <fieldset>
        <label>Columns</label>
        <input
          type="number"
          min="5"
          max="50"
          value={cols}
          onChange={(e) => setCols(Number(e.target.value))}
        />
      </fieldset>
    </form>
  );
}

export default Controls;
