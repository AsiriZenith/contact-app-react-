import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContatct from "./AddContact";
import ContactList from "./ContatctList";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContatctHandler = (contact) => {
    setContacts([...contacts, contact]);
  };
  return (
    <div className="ui container">
      <Header />
      <AddContatct addContatctHandler={addContatctHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
