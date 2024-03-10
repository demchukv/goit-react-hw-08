import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

const Contact = ({ contact }) => {

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className={css.contactItem}>
        <div>
        <span className={css.contactName}><FaUser />{contact.name}</span>
        <span className={css.contactNumber}><FaPhone />{contact.number}</span>
        </div>
        <div>
        <button type='button'>Edit</button>
        <button type='button' onClick={handleDelete}>Delete</button>
        </div>
    </li>
  )
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact