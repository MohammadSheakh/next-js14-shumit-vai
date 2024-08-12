"use client"; // Error boundaries must be Client Components

import { useEffect, useState } from "react";

export default function Error({ error, reset }) {
  // const [errors, setErrors] = useState(null);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("🔴🔴🔴🔴", error);
    // setErrors(error);
  }, [error]);

  return (
    <div>
      <h2>Mohammad Error : Something went wrong! when fetching all post </h2>
      {/* <h2>Actual Error : {errors}</h2> */}
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
