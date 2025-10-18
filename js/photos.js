import { getRandomInteger } from './util.js';
import { createComments } from './comments.js';

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: `Описание фотографии ${id}`,
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

const generatePhotos = () => {
  const photosArray = [];
  for (let i = 1; i <= 25; i++) {
    photosArray.push(createPhoto(i));
  }
  return photosArray;
};

export { generatePhotos };
