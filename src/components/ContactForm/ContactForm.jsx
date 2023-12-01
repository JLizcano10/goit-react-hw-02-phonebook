import { Component } from 'react';
import { ButtonForm, Form, InputForm, LabelForm } from './ContactForm.styles';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
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

  render() {
    return (
      <Form onSubmit={e => this.props.submit(e)}>
        <LabelForm>
          Name
          <InputForm
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleNameInput}
          />
        </LabelForm>
        <LabelForm>
          Number
          <InputForm
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleNumberInput}
          />
        </LabelForm>

        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    );
  }
}

export default ContactForm;
