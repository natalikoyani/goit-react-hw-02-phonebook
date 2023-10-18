import { nanoid } from "nanoid";
import { StyledList, StyledButton } from "./ContactList.styled";

export const ContactList = ({ items, filter, onDelete }) => {
    const filteredContacts = items.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
    });

    return(
            <StyledList>
                {filteredContacts.map(contact => {
                    return (
                        <li key={nanoid()}>{contact.name}: {contact.number} <StyledButton type="button" onClick={() => onDelete(contact.id)}>Delete</StyledButton></li>
                    )
                })}
            </StyledList>
    )
}