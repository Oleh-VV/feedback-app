import React from "react";
import styles from "./feedback-item.module.css";
import { RiStarSFill, RiDeleteBin2Line } from "react-icons/ri";
import { ReviewsContext } from "../context/ReviewsContext";
import { useContext } from "react";

function FeedbackItem({ item, style }) {
  const { reviewList, setReviewList, setCurrentReviewList } =
    useContext(ReviewsContext);
  const { text, date, rate, id } = item;
  async function deleteItem(id) {
    await fetch(
      `https://flourishing-sopapillas-8c2366.netlify.app/feedback/${id}`,
      { method: "DELETE" }
    );
    const list = [...reviewList];
    const newlist = list.filter((item) => item.id !== id);
    setReviewList(newlist);
    setCurrentReviewList(newlist);
  }
  return (
    <div className={styles.feedback_item}>
      <div className={styles.review_header}>
        {" "}
        <div className={styles.review_date}>{date}</div>
        <div className={styles.icons_container}>
          {" "}
          <RiDeleteBin2Line
            className={styles.delete_icon}
            onClick={() => deleteItem(id)}
          />
        </div>
      </div>
      <div className={styles.star_icon_out_wrapper}>
        <div className={styles.star_icon_wrapper}>
          <RiStarSFill className={styles.star} />
          <span className={styles[style]}>{rate}</span>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default FeedbackItem;
