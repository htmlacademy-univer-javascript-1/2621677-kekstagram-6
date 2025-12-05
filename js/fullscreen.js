import { isEscapeKey } from './util.js';

const COMMENTS_PER_LOAD = 5;

const bigPictureElement = document.querySelector('.big-picture');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');
const bigImage = bigPictureElement.querySelector('.big-picture__img img');
const likesCount = bigPictureElement.querySelector('.likes-count');
const commentsTotalCount = bigPictureElement.querySelector('.comments-count'); // ОБЩЕЕ количество
const commentsList = bigPictureElement.querySelector('.social__comments');
const photoDescription = bigPictureElement.querySelector('.social__caption');
const commentCountBlock = bigPictureElement.querySelector('.social__comment-count');
const commentsLoader = bigPictureElement.querySelector('.comments-loader');

let currentComments = [];
let commentsShown = 0;

const updateCommentsCounter = () => {
  const shownCountSpan = document.createElement('span');
  shownCountSpan.textContent = commentsShown;

  const currentText = commentCountBlock.textContent || '';
  const parts = currentText.split(' из ');

  if (parts.length > 0) {
    commentCountBlock.innerHTML = `${commentsShown} из <span class="comments-count">${currentComments.length}</span> комментариев`;
  }
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

const renderCommentsPortion = () => {
  const commentsToRender = currentComments.slice(commentsShown, commentsShown + COMMENTS_PER_LOAD);

  commentsToRender.forEach((comment) => {
    commentsList.appendChild(createCommentElement(comment));
  });

  commentsShown += commentsToRender.length;

  updateCommentsCounter();

  if (commentsShown >= currentComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const onCommentsLoaderClick = () => {
  renderCommentsPortion();
};

function closeModal() {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', closeModal);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);

  commentsShown = 0;
  currentComments = [];
  commentsList.innerHTML = '';
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const openFullscreen = (photoData) => {
  bigImage.src = photoData.url;
  bigImage.alt = photoData.description;
  likesCount.textContent = photoData.likes;
  commentsTotalCount.textContent = photoData.comments.length;
  photoDescription.textContent = photoData.description;

  commentsList.innerHTML = '';
  currentComments = photoData.comments;
  commentsShown = 0;

  commentCountBlock.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  renderCommentsPortion();

  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', closeModal);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

export { openFullscreen };
