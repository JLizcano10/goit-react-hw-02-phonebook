import React from 'react';
import ContactElementList from 'components/ContactElementList/ContactElementList';
import { List } from './ContactList.styles';

const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactElementList
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default ContactList;
