import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('This field is required'),
  number: Yup.number()
    .min(7, 'Minimum 7 characters')
    .required('This field is required'),
});

export default function ContactForm() {
  const contactNameId = nanoid();
  const contactNumberId = nanoid();

  return (
    <Formik
      initialValues={{ contactName: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <div className={css.inputContainer}>
          <label htmlFor={contactNameId} className={css.label}>
            Name
          </label>
          <Field
            type='text'
            name='contactName'
            id={contactNameId}
            className={css.contactInput}
          />
          <ErrorMessage
            name='contactName'
            className={css.error}
            component='p'
          />
        </div>
        <div className={css.inputContainer}>
          <label htmlFor={contactNumberId} className={css.label}>
            Number
          </label>
          <Field
            type='tel'
            name='number'
            id={contactNumberId}
            className={css.contactInput}
            pattern='[0-9]{7}'
            maxLength='7'
          />
          <ErrorMessage name='number' className={css.error} component='p' />
        </div>
        <button type='submit' className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
