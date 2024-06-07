import supabase from '../supabase/supabaseClient';

export default async function fetchPosts() {
  const { data } = await supabase.from('images').select('*');
  return data;
}
