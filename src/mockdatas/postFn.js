import supabase from '../supabase/supabaseClient';

export default async function fetchPosts() {
  const { data } = await supabase.from('images').select('*');
  console.log(data);

  return data;
}
