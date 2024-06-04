export default async function fetchPosts() {
  const res = await fetch('/src/assets/posts.json');
  const data = await res.json();
  //   console.log(data);
  return data;
}
