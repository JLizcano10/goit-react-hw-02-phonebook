import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
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
          fontSize: '25px',
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
