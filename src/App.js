import "./App.css";
import React, { useState } from "react";

function App() {
  const [fileContents, setFileContents] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const read = new FileReader();
    read.readAsBinaryString(file);
    read.onloadend = () => {
      setFileContents(read.result);
    };
  };

  const rot13 = (message) => {
    const alphabetToCipher =
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
    return message.replace(
      /[a-z]/gi,
      (letter) => alphabetToCipher[alphabetToCipher.indexOf(letter) + 13]
    );
  };

  return (
    <div className="App">
      <h1>Peter's Rot13 Encoder</h1>
      <input type="file" onChange={handleFileChange}></input>
      <p>{rot13(fileContents)}</p>
    </div>
  );
}

export default App;
