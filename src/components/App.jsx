import { Component } from "react";
import { Phonebook } from "./Phonebook/Phonebook";
import { Contacts } from "./Contacts/Contacts";
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: '',
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [ ...prevState.contacts, { ...newContact, id: nanoid() }]
    }))
  }

  onFilterChange = (evt) => {
    this.setState({filter: evt.target.value})
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Phonebook onAddContact={this.addContact} />
        <Contacts items={contacts} filter={filter} onChange={this.onFilterChange} />
      </>
    )
  }
};