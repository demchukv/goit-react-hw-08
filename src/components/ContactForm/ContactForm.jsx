import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const ContactForm = () => {
    
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(addContact(values));
        formik.resetForm();
    };

    const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^\d{3}-\d{3}-\d{4}$/, {message: "Enter correct phone number: 111-111-1111", excludeEmptyString: false,}).required("Required"),
      });
    
    const formik = useFormik({
        initialValues: {
          name: "",
          number: "",
        },
        validationSchema: ContactSchema,
        onSubmit: (values) => {
          handleSubmit(values);
        },
      });
    
    return (
        <Box sx={{ mt: 3 }} maxWidth="xs">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{mb:2}}
            variant="outlined"
          />
          <TextField
            fullWidth
            id="number"
            name="number"
            label="Number"
            type="text"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
            sx={{mb:2}}
            variant="outlined"
          />
          <Button variant="contained" type="submit" fullWidth>
            Add contact
          </Button>
        </form>
      </Box>
      )
}

export default ContactForm