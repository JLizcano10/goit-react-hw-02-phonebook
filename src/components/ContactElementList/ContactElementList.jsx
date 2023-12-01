const ContactElementList = ({ contact, onDelete }) => {
  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}{' '}
      <button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactElementList;
