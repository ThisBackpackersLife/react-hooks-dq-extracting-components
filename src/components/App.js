import React from "react";
// import { messages, contacts } from "../data";
import Messages from "./Messages";
import Contacts from "./Contacts";

// console.log("Messages:", messages);
// console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <Contacts />
      <Messages />      
    </div>
  );
}

export default App;
