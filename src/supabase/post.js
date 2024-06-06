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

// posts 테이블에 저장 (postid 반환)
const uploadToTable = async (newPost) => {
  const { title, content } = newPost;
  const { data, error } = await supabase.from('posts').insert([{ title, content }]).select();
  if (data) return data[0].id;
  if (error) console.log('uploadToTable 에러 :', error);
};

// storage에 저장 (해당 이미지들의 publicUrls을 담은 배열을 반환)
const uploadToStorage = async (files) => {
  const uploadPromises = files.map((file) => supabase.storage.from('pets').upload(`${crypto.randomUUID()}.png`, file));

  const results = await Promise.all(uploadPromises); // 한번에 업로드

  const publicUrls = [];
  results.forEach(({ data, error }) => {
    if (data) {
      console.log('>>>>>>', data);
      const { path } = data;
      const urlResponse = supabase.storage.from('pets').getPublicUrl(path);

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
  console.log(publicUrls);
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
// posts ids 가져오기
// 메인 화면에서 그리기 위해
export const getImageIdsFromTable = async () => {
  const { data, error } = await supabase.from('posts').select('id');
  if (error) console.log('posts 이미지 아이디 가져오기 에러', error);
  else return data;
};

// posts 가져오기
// {post_id} 를 배열에 담아
// 해당 포스트의 모든 사진에서 첫번째 사진만 반환 (메인화면/마이페이지에 그리기 위해)
export const getImagesFromImages = async (post_ids) => {
  try {
    const images = [];
    for (const post of post_ids) {
      const { data } = await supabase.from('images').select('*').eq('post_id', post.id);
      images.push(data[0]);
    }
    return images;
  } catch (error) {
    console.error('이미지 가져오기 에러:', error);
    return [];
  }
};

// post_id의 모든 사진을 가져옴
export const getPost = async (post_id) => {
  const { data, error } = await supabase.from('posts').select('*').eq('id', post_id);
  if (error) {
    console.log('post 가져오기 에러', error);
    return {};
  } else return data[0];
};

// user_id의 posts를 모두 가져옴
export const getPetsOfUserImage = async (user_id) => {
  const { data, error } = await supabase.from('posts').select('*').eq('user_id', user_id);

  if (error) console.log('사용자 피드 이미지 불러오기 에러:', error);
  else return data;
};

// ========== Update ============
export const upateNewPost = async (updatePost) => {
  console.log('>>>>>', updatePost);
  const { id, title, content } = updatePost;

  const { data, error } = await supabase
    .from('posts')
    .update({
      title,
      content
    })
    .eq('id', id)
    .select();

  if (error) {
    console.error('포스트 변경 에러:', error);
    return null;
  }
  if (data) {
    console.log('업뎃 완', data);
  }
};

// ========== Delete ============
export const deletePost = async (id) => {
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) console.log(error);
};
