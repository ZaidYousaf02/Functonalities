import React, { useState } from "react";
import RemoveFilter from "../Assets/Icons/filterRemove.png";

function FilterBtn({ setPersonAge }) {
  const [checkedState, setCheckedState] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (checkbox) => {
    setCheckedState((prevState) => ({
      ...Object.fromEntries(Object.keys(prevState).map((key) => [key, false])),
      [checkbox]: true,
    }));
  };

  const handleRemoveAll = () => {
    setCheckedState({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
    });
    setPersonAge("");
  };

  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          {" "}
          <label>
            <input
              type="checkbox"
              checked={checkedState.checkbox1}
              onChange={() => handleCheckboxChange("checkbox1")}
              value="child"
              onClick={(e) => setPersonAge(e.target.value)}
            />
            Child
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedState.checkbox2}
              onChange={() => handleCheckboxChange("checkbox2")}
              value="teen"
              onClick={(e) => setPersonAge(e.target.value)}
            />
            Teen
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedState.checkbox3}
              onChange={() => handleCheckboxChange("checkbox3")}
              value="adult"
              onClick={(e) => setPersonAge(e.target.value)}
            />
            Adult
          </label>
        </div>

        <button
          onClick={handleRemoveAll}
          className="FilterRemove-btn"
          style={{ marginTop: "15px", marginLeft: "8px" }}
        >
          Remove All <img src={RemoveFilter} alt="" />
        </button>
      </div>
    </>
  );
}

export default FilterBtn;
