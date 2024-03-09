import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from "react";
import * as Yup from "yup"
import css from './ContactForm.module.css'

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    phone: Yup.string().matches(/^\d{3}-\d{3}-\d{4}$/, {message: "Enter correct phone number: 111-111-1111", excludeEmptyString: false,}).required("Required"),
  });

const initialValues = {
    name: "",
    phone: "",
  };

const ContactForm = () => {
    
    const dispatch = useDispatch();

    const nameFieldId = useId();
    const phoneFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      };

    return (
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
                        <label htmlFor={phoneFieldId}>Number</label>
                        <Field className={css.formInput} type="text" name="phone" id={phoneFieldId} placeholder="123-456-7890" />
                        <ErrorMessage name="phone" component="div" className={css.formErrorMsg} />
                    </div>
                    <button type="submit">Add Contact</button>
                </Form>
            </Formik>
    )
}

export default ContactForm