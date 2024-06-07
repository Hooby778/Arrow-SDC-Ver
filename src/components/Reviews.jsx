import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../styles.css';
// import RelatedProducts from './RelatedProducts';
// import ProductDetails from './ProductDetails';
// import Reviews from './Reviews';

function Reviews() {
  const url = '/reviews?product_id=40344';
  // swap out with context tomorrow
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((err) => {
        console.error('error getting data', err);
      });
  }, []);

  const singleReview = { ...reviews, results: reviews.results?.slice(0, 1) };
  return (
    <div>
      {/* <ProductDetails />
      <RelatedProducts /> */}
      {/* <Reviews /> */}

      <ul>
        <ReviewPosts
          // reviews={reviews}
          reviews={singleReview} // render single review while testing code
        />
      </ul>
    </div>
  );
}

function ReviewPosts({ reviews }) {
  return (
    <div className="flex flex-col pl-5 pt-5">
      {reviews.results?.map((review) => (
        <div key={review.results?.review_id}>
          <span className="flex flex-row justify-between">
            <span>
              <p className="flex-none">
                {`${'🌝'.repeat(review.rating)}
                  ${'🌚'.repeat(5 - review.rating)}`}
              </p>
            </span>
            <p className="font-light text-gray-500">
              {`${review.reviewer_name} ${review.date.slice(5, 10)} ${review.date.slice(0, 4)}`}
            </p>
          </span>
          <h2 className="font-semibold text-lg">{review.summary}</h2>
          <div className="reviewBody">{review.body}</div>
        </div>
      ))}
      <p className="isHelpful">
        Helpful?
        <a href="/reviews">Yes      </a>
        <a href="/reviews">(10)  |</a>
        <a href="/reviews">Report </a>
      </p>
    </div>
  );
}

export default Reviews;
