import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContatctList = (props) => {
  const deleteContatctHandler = (id) => {
    props.getContactId(id);
  };

  const renderContatctList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContatctHandler}
      />
    );
  });
  return (
    <div className="main" style={{ marginTop: "45px" }}>
      <h2>
        Contact List
        <Link to="/add ">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContatctList}</div>
    </div>
  );
};

export default ContatctList;
