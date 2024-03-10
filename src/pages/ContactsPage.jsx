import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../components/DocumentTitle';
import ContactList from '../components/ContactList/ContactList';
//import { ContactEditor } from '../components/ContactEditor/ContactEditor';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import Loader from '../components/Loader/Loader';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your phonebook</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && <Loader />}</div>
      <ContactList />
    </>
  );
}
