
const pictureTemplate = document.querySelector('#picture');
const picturesContainer = document.querySelector('.pictures');

const createThumbnail = (pictureData) => {
  const thumbnail = pictureTemplate.content.querySelector('.picture').cloneNode(true);

  const image = thumbnail.querySelector('.picture_img');
  const commentsElement = thumbnail.querySelector('.picture_comments');
  const likesElement = thumbnail.querySelector('.picture_likes');


  image.src = pictureData.url;

  image.alt = pictureData.description;

  likesElement.textContent = pictureData.likes;

  commentsElement.textContent = pictureData.comments.length;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.appendChild(thumbnail);
  });

  picturesContainer.appendChild(fragment);
};

export { renderThumbnails };
