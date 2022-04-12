import styles from "./Phonebook.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../redux/actions";

const Filter = () => {
  const filterData = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const onFilter = (e) => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <div className={styles.filter}>
      <label className={styles.filterLabel} htmlFor="filter">
        Find contacts by name{" "}
      </label>
      <input
        className={styles.filterInput}
        required
        type="text"
        name="filter"
        onChange={onFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filterData}
      />
    </div>
  );
};

export default Filter;
