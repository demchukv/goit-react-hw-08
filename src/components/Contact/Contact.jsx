import { useState } from 'react';
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import css from "./Contact.module.css";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteContactDialog from "../DeleteContactDialog/DeleteContactDialog";
import EditContactDialog from '../EditContactDialog/EditContactDialog';

const Contact = ({ contact }) => {

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleClickOpenEditDialog = () => {
    setOpenEdit(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleCloseEditDialog = () => {
    setOpenEdit(false);
  };

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  
  return (
    <li className={css.contactItem}>
      <div>
        <span className={css.contactName}>
          <PersonIcon />
          {contact.name}
        </span>
        <span className={css.contactNumber}>
          <PhoneIcon />
          {contact.number}
        </span>
      </div>
      <ButtonGroup orientation="vertical" aria-label="Vertical button group" variant="text">
        <Button type="button"  onClick={handleClickOpenEditDialog}>
          Edit
        </Button>
        <Button type="button" onClick={handleClickOpenDialog}>
          Delete
        </Button>
      </ButtonGroup>
      <DeleteContactDialog open={open} id={contact.id} handleClose={handleCloseDialog} handleDelete={handleDelete} />
      <EditContactDialog  open={openEdit} contact={contact} handleClose={handleCloseEditDialog} />
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
