import React from "react";
import styles from "./counters.module.css";
import { ReviewsContext } from "../context/ReviewsContext";
import { useContext } from "react";
import { RiSortAsc } from "react-icons/ri";

function Counters() {
  const { currentReviewList, setCurrentReviewList } =
    useContext(ReviewsContext);
  const totalRate = currentReviewList.reduce(
    (sum, item) => sum + Number(item.rate),
    0
  );
  let averageRating = 0;
  totalRate === 0
    ? (averageRating = 0)
    : (averageRating = (totalRate / currentReviewList.length).toFixed(1));

  function sortByRating() {
    const list = [...currentReviewList];
    list.sort((a, b) => b.rate - a.rate);
    setCurrentReviewList(list);
  }
  function sortByDate() {
    const list = [...currentReviewList];
    list.sort((a, b) => new Date(b.date) - new Date(a.date));
    setCurrentReviewList(list);
  }
  return (
    <div className={styles.counters_container}>
      <div className={styles.review_counter_container}>
        <span className={styles.review_counter}>
          {currentReviewList.length}
        </span>
        <span> Reviews</span>
      </div>
      <div className={styles.sort_wrapper}>
        <span className={styles.sort_by}>Sort by</span>
        <RiSortAsc className={styles.sort_icon} />
        <ul>
          <li onClick={sortByDate}>By date</li>
          <li onClick={sortByRating}>By rate</li>
        </ul>
      </div>
      <div className={styles.average_rating_container}>
        <span>Average rating:</span>{" "}
        <span className={styles.average_rating}>{averageRating}</span>
      </div>
    </div>
  );
}

export default Counters;
