import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from "react";
import * as Yup from "yup"
import css from './ContactForm.module.css'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().matches(/^\d{3}-\d{3}-\d{4}$/, {message: "Enter correct phone number: 111-111-1111", excludeEmptyString: false,}).required("Required"),
  });

const initialValues = {
    name: "",
    number: "",
  };

const ContactForm = () => {
    
    const dispatch = useDispatch();

    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
    };

    return (
        <Box sx={{mt:4}}>
            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
            >
                <Form className={css.contactForm}>
                    <div className={css.formFieldsContainer}>
                        <label htmlFor={nameFieldId}>Name</label>
                        <Field className={css.formInput} type="text" name="name" id={nameFieldId} />
                        <ErrorMessage name="name" component="div" className={css.formErrorMsg} />
                    </div>
                    <div className={css.formFieldsContainer}>
                        <label htmlFor={numberFieldId}>Number</label>
                        <Field className={css.formInput} type="text" name="number" id={numberFieldId} placeholder="123-456-7890" />
                        <ErrorMessage name="number" component="div" className={css.formErrorMsg} />
                    </div>
                    <Button type="submit" variant='contained'>Add Contact</Button>
                </Form>
            </Formik>
            </Box>
    )
}

export default ContactForm