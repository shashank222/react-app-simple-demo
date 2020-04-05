import React from "react";
import { useState } from "react";

function SimpleHooks(params) {
  const [inputValue, setInputValue] = useState('');
  return <div>
    <input onChange={(e) => { setInputValue(e.target.value) }} />
    <p>Typed Value: {inputValue}</p>
  </div>
}

export { SimpleHooks };
