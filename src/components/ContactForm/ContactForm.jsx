import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const phonebookSchema = Yup.object().shape({
  name: Yup.string().required('This field is required!'),
  number: Yup.number().integer('Must be integer numbers!').required('This field is required!')
});

export const ContactForm = ({ contacts, onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '', }}
      validationSchema={phonebookSchema}
      onSubmit={(values, actions) => {
        contacts.some(contact => contact.name === values.name)
          ? alert(`${values.name} is already in contacts`)
          : onAddContact(values);
        actions.resetForm();
      }}
    >
        <Form>
          <label>
            Name
            <Field
              name="name"
            />
            <ErrorMessage name="name" />
          </label>
          <label>
            Number
            <Field
               type="number"name="number"
            />
            <ErrorMessage name="number" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
  );
};