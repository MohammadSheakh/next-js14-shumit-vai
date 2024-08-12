import Comments from "@/app/components/Comments";
import getAllPost from "@/lib/getAllPosts";
import getAPost from "@/lib/getAPost";
import getPostComments from "@/lib/getPostComments";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

// function er nam eitai rakhte hobe ...
export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getAPost(id);
  return {
    title: post.title,
    description: post.body,
    // image: "https://example.com/image.png",
  };
}

async function PostPage({ params }) {
  const { id } = params;

  // const post = await getAPost(id);
  // const comments = await getPostComments(id);

  // amader ke parallel vabe fetch korte hobe .. er jonno
  // amra shudhu promise gula rakhbo

  const postPromise = getAPost(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  const post = await postPromise;

  // if (!post.title) {
  //   return notFound();
  // }

  return (
    <>
      <div>page details of {id}</div>
      <h1>Post Title : {post.title}</h1>

      <h1>Post Description : {post.body}</h1>

      <div>
        <h1>Comments ...</h1>
        <Suspense fallback={<div>Loading Comments...</div>}>
          <Comments promise={commentsPromise} />
        </Suspense>
        {/* <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              {comment.name} - {comment.email} - {comment.body}
            </li>
          ))}
        </ul> */}
        {/* //////////////////////////////////// */}
        {/* <div class="overflow-x-auto">
          <table class="min-w-full bg-blue-900">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="w-1/3 px-4 py-2 text-left">Name</th>
                <th class="w-1/3 px-4 py-2 text-left">Email</th>
                <th class="w-1/3 px-4 py-2 text-left">Comment</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment.id} class="bg-gray-900 border-b">
                  <td class="px-4 py-2">{comment.name}</td>
                  <td class="px-4 py-2">{comment.email}</td>
                  <td class="px-4 py-2">{comment.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        {/* /////////////////////////////////////// */}
      </div>

      <button className="px-2 border border-green-600 rounded-sm mt-4 text-green-800 hover:border-green-400">
        {" "}
        <Link href="/posts">back to posts</Link>{" "}
      </button>
    </>
  );
}

export default PostPage;

export async function generateStaticParams() {
  const posts = await getAllPost();
  // array of object return korte hobe

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
