import { nanoid } from "nanoid"

export const ContactList = ({ items, filter, onDelete }) => {
    const filteredContacts = items.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
    });

    return(
            <ul>
                {filteredContacts.map(contact => {
                    return (
                        <li key={nanoid()}>{contact.name}: {contact.number} <button type="button" onClick={() => onDelete(contact.id)}>Delete</button></li>
                    )
                })}
            </ul>
    )
}