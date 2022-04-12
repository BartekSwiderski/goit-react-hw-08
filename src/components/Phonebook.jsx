import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import styles from './Phonebook.module.css';
import Navbar from './Navbar';

export class Phonebook extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1 className={styles.title}>Phonebook</h1>

        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default Phonebook;
