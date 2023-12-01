import { ButtonListItem, ListItem } from './ContactElementList.styles';

const ContactElementList = ({ contact, onDelete }) => {
  return (
    <ListItem key={contact.id}>
      {`${contact.name}: ${contact.number}`}
      <ButtonListItem type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </ButtonListItem>
    </ListItem>
  );
};

export default ContactElementList;
