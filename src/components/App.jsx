import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleNameSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const userName = form.elements.name.value;
    const userNumber = form.elements.number.value;

    const nameAlreadyExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === userName.toLowerCase()
    );

    if (nameAlreadyExists) {
      alert(`${userName} is already in contacts`);
      return;
    }

    const newContact = {
      name: userName,
      id: nanoid(),
      number: userNumber,
    };

    this.setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, newContact],
    }));

    form.reset();
  };

  handleFilter = e => {
    const searchName = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      filter: searchName,
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          gap: 20,
          padding: 10,
          fontSize: 25,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm submit={this.handleNameSubmit} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
