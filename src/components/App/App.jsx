import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';
import contactDatabase from '../../data/contactDatabase.json';

console.log(contactDatabase[0]);

// import * as Yup from "yup"

function App() {
  const [contacts, setContacts] = useState(contactDatabase);

  // const handelContactAdd = contact => {
  //   setContacts({ ...contacts, contact });
  // };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
