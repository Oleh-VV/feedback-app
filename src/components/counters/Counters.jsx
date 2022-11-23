import React from "react";
import styles from "./counters.module.css";
import { RiSortAsc } from "react-icons/ri";

function Counters() {
  return (
    <div className={styles.counters_container}>
      <div className={styles.review_counter_container}>
        <span className={styles.review_counter}>3</span>
        <span> Reviews</span>
      </div>
      <div className={styles.sort_wrapper}>
        <span className={styles.sort_by}>Sort by</span>
        <RiSortAsc className={styles.sort_icon} />
        <ul>
          <li>By date</li>
          <li>By rate</li>
        </ul>
      </div>
      <div className={styles.average_rating_container}>
        <span>Average rating:</span>{" "}
        <span className={styles.average_rating}>3.6</span>
      </div>
    </div>
  );
}

export default Counters;
