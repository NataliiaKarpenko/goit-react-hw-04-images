import axios from 'axios';

export const requestPhotos = async (query, page, perPage) => {
  const url = 'https://pixabay.com/api/';
  const apiKey = '33069877-56d6b4be23d42e6d3f03db65c';
  const { data } = await axios.get(
    `${url}?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );

  return data;
};
