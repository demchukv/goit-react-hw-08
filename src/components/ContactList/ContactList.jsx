import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';

const ContactList = () => {

  const contacts = useSelector(selectVisibleContacts);

  return (
    Array.isArray(contacts) &&
    <ul className={css.contactList}>
        {contacts.map((contact) => {
            return <Contact key={contact.id} contact={contact} />
        })}
    </ul>
  )

}

export default ContactList;