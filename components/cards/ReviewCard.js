import PropTypes from "prop-types";
import React from "react";
import styles from "../modules/ReviewCard.module.css";
import SanityImage from "../SanityImage";
import Card from "./Card";

export default function ReviewCard({ review }) {
  return (
    <Card className={styles.card}>
      <SanityImage
        params={{ "max-w": 80, "max-h": 80 }}
        className={styles.picture}
        src={review.authorPicture}
      />
      <h3 className={styles.authorName}>{review.authorName}</h3>
      <h4 className={styles.authorJob}>{review.authorJob}</h4>
      <p className={styles.content}>{review.content}</p>
    </Card>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
};
