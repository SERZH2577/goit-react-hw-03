import css from './SearchBox.module.css';
import { nanoid } from 'nanoid';
import { Formik, Field } from 'formik';

export default function SearchBox() {
  const nameId = nanoid();

  return (
    <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
      <div className={css.searchNameContainer}>
        <label htmlFor={nameId} className={css.label}>
          Find contacts by name
        </label>
        <Field
          type='text'
          name='name'
          id={nameId}
          className={css.searchInput}
        />
      </div>
    </Formik>
  );
}
