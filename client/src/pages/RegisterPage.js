import { useState } from "react";
import StyleButton from "./StyleButton";

export default function RegisterPage() {


  const [finalValue, setFinalValue] = useState('');
  const [firstInputValue, setFirstInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');

  async function register(ev) {
    ev.preventDefault();
  }

  const handleFirstInputChange = (event) => {
    setFirstInputValue(event.target.value);
  };

  const handleSecondInputChange = (event) => {
    setSecondInputValue(event.target.value);
  };


  function handleClick() {
    setFinalValue(firstInputValue + " " + secondInputValue);
  }

  return (
    <form className="register" onSubmit={register}>
      <input type="text" placeholder="First Input" value={firstInputValue} onChange={handleFirstInputChange} />
      <input type="text" placeholder="Second Input" value={secondInputValue} onChange={handleSecondInputChange} />
      {/* Example on how to pass properties to your component */}
      <StyleButton
        buttonClicked={handleClick}
        label="Button One"
        id="btn-one" />

      <h1>{finalValue}</h1>
    </form>
  );
}
