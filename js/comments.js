import { getRandomInteger, getRandomArrayElement } from './util.js';
import { MESSAGES, NAMES } from './data.js';

const generateCommentId = () => {
  let lastId = 100;
  return () => {
    lastId += 1;
    return lastId;
  };
};

const createCommentId = generateCommentId();

const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }
  return comments;
};

export { createComments };
