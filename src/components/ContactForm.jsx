import styles from "./Phonebook.module.css";
import React from "react";
import { usePostContactMutation } from "../redux/api";

const ContactForm = () => {
  const [data] = usePostContactMutation();

  const submitForm = (e) => {
    const form = e.target;
    const name = form.name.value;
    const phone = form.number.value;
    e.preventDefault();
    form.reset();
    return data({ name, phone });
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="name">
          Name
        </label>
        <input
          className={styles.formInput}
          required
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="number">
          Number
        </label>
        <input
          className={styles.formInput}
          required
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </div>
      <button className={styles.formButton}>Add contact</button>
    </form>
  );
};

export default ContactForm;
