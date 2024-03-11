import DocumentTitle from "../components/DocumentTitle";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <DocumentTitle>Personal phonebook</DocumentTitle>
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h1"
          component="p"
          sx={{ mb: 2, textAlign: "center", fontSize: "36px" }}
        >
          <ContactPhoneIcon />
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          sx={{ mb: 2, textAlign: "center" }}
        >
          Welcome!
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{ mb: 2, textAlign: "center" }}
        >
          Create your own phonebook for free!
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
