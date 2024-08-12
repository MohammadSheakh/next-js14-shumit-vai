// functional component
// rfce
import getAllPost from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

async function Posts() {
  const posts = await getAllPost();

  return (
    <>
      <div className="mt-10">All Posts</div>

      <ul className="mt-10">
        {posts.map((post) => (
          <li key={post.id}>
            {" "}
            <Link href={`/posts/${post.id}`}>{post.title}</Link>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
