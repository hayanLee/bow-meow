import supabase from './supabaseClient';

export const getPosts = async () => {
  let { data: posts, error } = await supabase.from('posts').select('*');
  console.log(posts);
};

export const createPost = async () => {
  const { data, error } = await supabase
    .from('posts')
    .insert([{ title: prompt('제목을 입력해주세요'), content: prompt('내용을 입력해주세요') }])
    .select('*'); // 추가 후,모두 가져오기

  if (data) console.log('추가', data);
  if (error) console.log(error);
};

export const deletePost = async (id) => {
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) console.log(error);
};

export const updatePost = async (id) => {
  const { data, error } = await supabase
    .from('posts')
    .update({ title: prompt('수정할 제목을 입력해주세요'), content: prompt('수정할 내용을 입력해주세요') })
    .eq('id', id)
    .select();
};
