import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
// import nanoid from 'nanoid';

export default function ContactList({ contacts }) {
  const elementsMarkup = contacts.map(contact => (
    <Contact contact={contact} key={contact.id} />
  ));

  return <ul className={css.list}>{elementsMarkup}</ul>;
}
