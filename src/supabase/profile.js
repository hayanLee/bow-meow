import supabase from './supabaseClient';

export const checkProfile = () => {
  const { data } = supabase.storage.from('avatars').getPublicUrl('default-profile.jpg');
  if (data) console.log(data);
};
