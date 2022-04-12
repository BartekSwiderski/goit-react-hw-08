import React from 'react';
import styles from './components/Phonebook.module.css';
import Phonebook from './components/Phonebook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className={styles.app}>
      <Phonebook />
    </div>
  );
}

export default App;
