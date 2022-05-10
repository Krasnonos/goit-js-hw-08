import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function creareGallaryMarkup(imagesArrey) {
  return imagesArrey
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="large-image.jpg"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

galleryEl.innerHTML = creareGallaryMarkup(galleryItems);

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  var lightbox = new SimpleLightbox('.gallery a', {
    animationSpeed: 100,
  });

  document.addEventListener('keydown', onCloseModal);
}

function onCloseModal(evt) {
  evt.preventDefault();

  if (evt.code === 'Escape') {
    modalImg.close();
  }

  document.removeEventListener('keydown', onCloseModal);
}
