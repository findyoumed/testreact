import React from "react";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  
  return (
    <div>
      <SearchBox />
      {contactList.map((item) => (
        <ContactItem item={item} />
      ))}
    </div>
  );
};

export default ContactList;
