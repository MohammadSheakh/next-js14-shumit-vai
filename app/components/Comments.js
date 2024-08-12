import React from "react";

async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div class="overflow-x-auto">
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
    </div>
  );
}

export default Comments;
