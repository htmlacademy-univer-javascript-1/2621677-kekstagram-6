import { isEscapeKey } from './util.js';

import { isEscapeKey } from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');
const bigImage = bigPictureElement.querySelector('.big-picture__img img');
const likesCount = bigPictureElement.querySelector('.likes-count');
const commentsCount = bigPictureElement.querySelector('.comments-count');
const commentsList = bigPictureElement.querySelector('.social__comments');
const photoDescription = bigPictureElement.querySelector('.social__caption');
const commentCountBlock = bigPictureElement.querySelector('.social__comment-count');
const commentsLoader = bigPictureElement.querySelector('.comments-loader');

commentCountBlock.classList.add('hidden');
commentsLoader.classList.add('hidden');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const closeModal = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', closeModal);
};

const createCommentElement = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const avatarImage = document.createElement('img');
  avatarImage.classList.add('social__picture');
  avatarImage.src = comment.avatar;
  avatarImage.alt = comment.name;
  avatarImage.width = 35;
  avatarImage.height = 35;

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;

  commentElement.appendChild(avatarImage);
  commentElement.appendChild(commentText);

  return commentElement;
};

const openFullscreen = (photoData) => {
  bigImage.src = photoData.url;
  bigImage.alt = photoData.description;
  likesCount.textContent = photoData.likes;
  commentsCount.textContent = photoData.comments.length;
  photoDescription.textContent = photoData.description;

  commentsList.innerHTML = '';
  const commentsFragment = document.createDocumentFragment();

  photoData.comments.forEach((comment) => {
    commentsFragment.appendChild(createCommentElement(comment));
  });

  commentsList.appendChild(commentsFragment);

  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', closeModal);
};

export { openFullscreen };
