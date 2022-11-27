import { createContext, useState } from "react";
export const ReviewsContext = createContext();
export const ReviewsProvider = ({ children }) => {
  const [reviewList, setReviewList] = useState([
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "2022-11-15",
      rate: "8",
      id: 1,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2022-11-17",
      rate: "10",
      id: 2,
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2022-11-19",
      rate: "1",
      id: 3,
    },
    {
      text: "Est laborum.",
      date: "2022-11-22",
      rate: "9",
      id: 4,
    },
  ]);
  const [currentReviewList, setCurrentReviewList] = useState(reviewList);
  const value = {
    reviewList,
    setReviewList,
    currentReviewList,
    setCurrentReviewList,
  };
  return (
    <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
  );
};
