import React from "react";
import ContactCard from "./ContactCard";

const ContatctList = (props) => {
  const renderContatctList = props.contacts.map((contact) => {
    return <ContactCard key={contact.email} contact={contact} />;
  });
  return <div className="ui celled list">{renderContatctList}</div>;
};

export default ContatctList;
