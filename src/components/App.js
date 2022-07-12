import React from "react";
import "./App.css";
import Header from "./Header";
import AddContatct from "./AddContact";
import ContactList from "./ContatctList";

function App() {
  const contacts = [
    {
      id: 1,
      name: "Asiri",
      email: "asiri@gmail.com",
    },
    {
      id: 2,
      name: "Senith",
      email: "senith@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContatct />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
