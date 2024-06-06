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
export const getImageIdsFromTable = async () => {
  let { data, error } = await supabase.from('posts').select('id');
  if (error) console.log('posts 이미지 아이디 가져오기 에러', error);
  else return data;
};

// posts 가져오기
export const getImagesFromTable = async () => {
  let { data, error } = await supabase.from('posts').select('*');
  if (error) console.log('데이터 가져오기 에러', error);
  else return data;
};

// posts 가져오기
// id(post) === post_id(images) 같은 것중 하나만 이미지를 보여주고
// id로는 navigation에 연결
export const getImagesFromImages = async (post_ids) => {
  try {
    const promises = post_ids.map(async (post) => {
      const { data } = await supabase.from('images').select('*').eq('post_id', post.id);
      return data[0];
    });

    const images = await Promise.all(promises);
    // console.log(images);
    return images;
  } catch (error) {
    console.error('이미지 가져오기 에러:', error);
    return [];
  }
};

// 사용자 피드
export const getPetsOfUserImage = async (user_id) => {
  const { data, error } = await supabase.from('posts').select('*').eq('user_id', user_id);

  if (error) console.log('사용자 피드 이미지 불러오기 에러:', error);
  else return data;
};

// ========== Update ============

// ========== Delete ============
export const deletePost = async (id) => {
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) console.log(error);
};
