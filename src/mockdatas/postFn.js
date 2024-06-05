import supabase from '../supabase/supabaseClient';

export default async function fetchPosts() {
  // const { data } = await supabase.from('images').select('img_url');
  // console.log(data);

  const res = await fetch('/src/assets/posts.json');
  const data = await res.json();
  // //   console.log(data);
  return data;
}
