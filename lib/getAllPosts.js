export default async function getAllPost() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      next: {
        revalidate: 10, // 10 sec por por checking hobe .. new data fetch korbe ..
      },
      // cache: "force-cache", //by default .. cache korbe ..
      // cache: "no-store", // cache korbe na .. shob shomoy updated data dekhabe ..
    }
  );

  if (!result.ok) {
    throw new Error("Failed to fetch all post");
  }
  return result.json(); // string ke json e convert kore nilam ..
}
