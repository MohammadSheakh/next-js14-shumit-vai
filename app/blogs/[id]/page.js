import { notFound } from "next/navigation";
import React from "react";

function blogPage({ params }) {
  const { id } = params;
  if (id === "3") {
    notFound();
  }
  return (
    <>
      <div>blog ID is - {id}</div>
    </>
  );
}

export default blogPage;
