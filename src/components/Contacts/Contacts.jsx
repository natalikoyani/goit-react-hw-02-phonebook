import { nanoid } from "nanoid"

export const Contacts = ({ items, filter, onChange }) => {
    const filteredContacts = items.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
    });

    return(
        <div>
            <h2>Contacts</h2>
            <p>Find contacts by name</p>
            <input type="string" name="filter" onChange={onChange} />
            <ul>
                {filteredContacts.map(contact => {
                    return (
                        <li key={nanoid()}>{contact.name}: {contact.number}</li>
                    )
                })}
            </ul>
        </div>
    )
}