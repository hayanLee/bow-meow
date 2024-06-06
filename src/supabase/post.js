import supabase from './supabaseClient';

// ======= Create ========

export const uploadImg = async (newPost, files) => {
  try {
    // uploadToTable, uploadToStorage 병렬 실행
    // 1. posts 테이블에 저장
    // 2. storage에 저장
    // 3. images 테이블에 저장
    const [postId, fileUrls] = await Promise.all([uploadToTable(newPost), uploadToStorage(files)]);
    await uploadToImages(postId, fileUrls);
  } catch (error) {
    console.error('uploadImg 에러:', error);
  }
};

// posts 테이블에 저장
const uploadToTable = async (newPost) => {
  const { title, content } = newPost;
  const { data, error } = await supabase.from('posts').insert([{ title, content }]).select();
  if (data) return data[0].id;
  if (error) console.log('uploadToTable 에러 :', error);
};

// storage에 저장
const uploadToStorage = async (files) => {
  const uploadPromises = files.map((file) => supabase.storage.from('pets').upload(`${crypto.randomUUID()}.png`, file));

  const results = await Promise.all(uploadPromises); // 한번에 업로드

  const publicUrls = [];
  results.forEach(({ data, error }) => {
    if (data) {
      const { id } = data;
      const urlResponse = supabase.storage.from('pets').getPublicUrl(id);

      if (urlResponse.error) console.error('img url 가져오기 실패', urlResponse.error);
      else {
        const publicUrl = urlResponse.data.publicUrl;
        publicUrls.push(publicUrl);
      }
    }
    if (error) {
      console.error('storage 저장 에러:', error);
    }
  });

  return publicUrls;
};

// images 테이블에 저장
const uploadToImages = async (rowId, fileUrls) => {
  try {
    const uploadPromises = fileUrls.map((fileUrl) => {
      return supabase.from('images').insert([{ img_url: fileUrl, post_id: rowId }]);
    });

    const results = await Promise.all(uploadPromises);

    results.forEach(({ data, error }) => {
      console.log(data);
      if (data) console.log(data);
      if (error) {
        console.log('이미지 url 추가 에러:', error);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

// ======== Read ==========
export const getUrlOfCats = async () => {
  const { data, error } = await supabase.storage.from('pets').list('Cat');

  if (error) {
    console.log('Error:', error);
    return;
  }

  const urls = data.map((file) => {
    const { data, error } = supabase.storage.from('pets').getPublicUrl(`Cat/${file.name}`);

    if (error) {
      console.log('url 가져오기 실패', error);
      return null;
    }
    return data.publicUrl;
  });

  // console.log(urls);
  return urls;
};

export const getImagePath = async () => {
  const { data, error } = await supabase.storage.from('pets').getPublicUrl('path/to/file.jpg');

  if (error) {
    console.log('Error getting public URL:', error.message);
  } else {
    console.log('Public URL:', data);
  }
};

// ========== Update ============
export const getPosts = async () => {
  let { data: posts, error } = await supabase.from('posts').select('*');
  console.log(posts);
};

// ========== Delete ============
export const deletePost = async (id) => {
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) console.log(error);
};
