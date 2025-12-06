import { getPhotos } from './data.js';
import { renderThumbnails } from './thumbnails.js';
import './form-validation.js';

document.addEventListener('DOMContentLoaded', () => {
  const photos = getPhotos();
  renderThumbnails(photos);
});
