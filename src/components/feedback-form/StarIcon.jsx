import React from "react";
import { RiStarSFill } from "react-icons/ri";
import styles from "./feedback-form.module.css";

function StarIcon({ rate }) {
  return (
    <div className={styles.star_icon_wrapper}>
      <RiStarSFill className={styles.star} />
      <span className={styles.star_rate}>{rate}</span>
    </div>
  );
}

export default StarIcon;
