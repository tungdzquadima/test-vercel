import { useRef, useState } from "react";

function UseRef() {
  const [valueInput, setValuaInput] = useState("");
  const handleChange = (e) => {
    setValuaInput(e.target.value);
  };
  return (
    <>
      <div>
        <input type="text" value={valueInput} onChange={handleChange}/>
      </div>
    </>
  );
}
export default UseRef;
