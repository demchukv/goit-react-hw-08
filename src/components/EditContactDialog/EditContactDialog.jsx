import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import ContactForm from '../ContactForm/ContactForm';

const EditContactDialog = ({ open, handleClose, contact }) => {
      
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Edit contact"}
    </DialogTitle>
    <DialogContent>
        <ContactForm contact={contact} handleClose={handleClose} />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} autoFocus>Cancel</Button>
    </DialogActions>
  </Dialog>

  )
}

export default EditContactDialog