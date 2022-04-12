import React from "react";
import { useGetContactsQuery, useDeleteContactMutation } from "../redux/api";
import styles from "./Phonebook.module.css";
import { useSelector } from "react-redux";

const getVisibleContacts = (contacts, filter) => {
  const normFilter = filter.toLowerCase().trim();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normFilter) ||
      contact.phone.includes(filter)
  );
};

const Contact = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const dataFilter = useSelector((state) => state.filter);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <p>loading</p>
      ) : data ? (
        <>
          {getVisibleContacts(data, dataFilter).map(({ id, name, number }) => (
            <li key={id} className={styles.contactItem}>
              <div>
                <span className={styles.contactName}>{name}</span>
              </div>
              <div>
                <span className={styles.contactNumber}>tel. {number}</span>
              </div>
              <button
                id={id}
                className={styles.contactDel}
                onClick={() => {
                  deleteContact(id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </>
      ) : null}
    </>
  );
};

const ContactList = () => {
  return (
    <div>
      <ul>
        <Contact />
      </ul>
    </div>
  );
};

export default ContactList;
