import axios from 'axios';

const KEY = '31603947-f30504e383afe7563a8407818';

export function fetchPhoto(searchQuery, page) {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
