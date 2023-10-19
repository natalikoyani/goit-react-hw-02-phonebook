import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = newContact => {
    if (this.state.contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      return alert(`${newContact.name} is already in contacts!`)
    }
    
    this.setState(prevState => ({
      contacts: [ ...prevState.contacts, { ...newContact, id: nanoid() }]
    }))
  }

  onFilterChange = evt => {
    this.setState({filter: evt.target.value})
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  }

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter items={filteredContacts} onChange={this.onFilterChange} />
        <ContactList items={filteredContacts} onDelete={this.deleteContact} />
      </div>
    )
  }
};