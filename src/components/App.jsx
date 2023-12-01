import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
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

  handleNameInput = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handleNumberInput = e => {
    this.setState({
      number: e.target.value,
    });
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
        <form onSubmit={this.handleNameSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleNameInput}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleNumberInput}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input type="text" onChange={this.handleFilter} />
        </label>
        <ul>
          {contacts
            .filter(contact => {
              const filterInLowerCase = filter.toLowerCase();
              const nameInLowerCase = contact.name.toLowerCase();
              return nameInLowerCase.includes(filterInLowerCase);
            })
            .map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}{' '}
                <button
                  type="button"
                  onClick={() => this.handleDelete(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
