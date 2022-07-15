import React from "react";
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
  return <div className="ui celled list">{renderContatctList}</div>;
};

export default ContatctList;
