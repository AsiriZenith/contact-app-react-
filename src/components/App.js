import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContatct from "./AddContact";
import ContactList from "./ContatctList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  
  const [contacts, setContacts] = useState([]);

  const addContatctHandler = (contact) => {
    setContacts([...contacts, { id: Math.floor(Math.random() * 100000), ...contact }]);
    console.log(JSON.stringify(contact));
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContatct addContatctHandler={addContatctHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
