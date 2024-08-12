// functional component
// rfce
import Link from "next/link";
import React from "react";
const blogs = [
  {
    id: 1,
    title: "Blog 1",
    description: "This is Blog 1",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "This is Blog 2",
  },
];
function Blogs() {
  return (
    <>
      <div className="mt-10">This is Blog Page</div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}> {blog.title} </Link>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Blogs;
