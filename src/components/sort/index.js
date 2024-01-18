import React from "react";

// styles
import styles from "./index.module.scss";

const Sort = ({ setSortBy }) => {
  const updateSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className={styles.sort} data-testid="sort-component">
      <form>
        <fieldset>
          <legend>Sort by:</legend>
          <input
            type="radio"
            id="name"
            onChange={updateSortBy}
            name="inputName"
            value="name"
            data-testid="sort-by-name"
          />
          <label htmlFor="name">Name</label>
          <input
            type="radio"
            id="size"
            value="size"
            onChange={updateSortBy}
            name="inputName"
            data-testid="sort-by-size"
          />
          <label htmlFor="size">Size</label>
          <input
            type="radio"
            id="date"
            onChange={updateSortBy}
            value="date"
            name="inputName"
            data-testid="sort-by-date"
          />
          <label htmlFor="date">Date</label>
        </fieldset>
      </form>
    </div>
  );
};

export default Sort;
