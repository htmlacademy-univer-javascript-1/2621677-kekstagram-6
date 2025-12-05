import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');
const bigImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const description = bigPicture.querySelector('.social__caption');

bigPicture.querySelector('.social__comment-count').classList.add('hidden');
bigPicture.querySelector('.comments-loader').classList.add('hidden');

function closeModal() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscPress);
  closeBtn.removeEventListener('click', closeModal);
}

function onEscPress(event) {
  if (isEscapeKey(event)) {
    event.preventDefault();
    closeModal();
  }
}

function createComment(commentData) {
  const comment = document.createElement('li');
  comment.className = 'social__comment';

  const avatar = document.createElement('img');
  avatar.className = 'social__picture';
  avatar.src = commentData.avatar;
  avatar.alt = commentData.name;
  avatar.width = 35;
  avatar.height = 35;

  const text = document.createElement('p');
  text.className = 'social__text';
  text.textContent = commentData.message;

  comment.append(avatar, text);
  return comment;
}

function openFullscreen(photoData) {
  bigImage.src = photoData.url;
  bigImage.alt = photoData.description;
  likesCount.textContent = photoData.likes;
  commentsCount.textContent = photoData.comments.length;
  description.textContent = photoData.description;

  commentsList.innerHTML = '';
  photoData.comments.forEach(comment => {
    commentsList.append(createComment(comment));
  });

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEscPress);
  closeBtn.addEventListener('click', closeModal);
}

export { openFullscreen };
