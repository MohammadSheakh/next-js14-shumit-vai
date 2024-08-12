export default async function getAPost(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!result.ok) {
    throw new Error("Failed to fetch single post");
  }
  return result.json(); // string ke json e convert kore nilam ..
}
