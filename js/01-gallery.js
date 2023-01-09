import { galleryItems } from './gallery-items.js';

const galleryBox = document.querySelector('.gallery');

// add gallery Items
galleryBox.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galleryBox.addEventListener('click', onGalleryBoxClick);

// functions //
function onGalleryBoxClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const urlLargeImg = event.target.dataset.source;
  const altLArgeImg = event.target.alt;

  let instance = basicLightbox.create(
    `<img src="${urlLargeImg}" alt="${altLArgeImg}">`,
    {
      onShow: (instance) => {
        document.addEventListener('keyup', onClickEscKey);
      },
      onClose: (instance) => {
        document.removeEventListener('keyup', onClickEscKey);
      },
    }
  );
  instance.show();

  function onClickEscKey(event) {
    console.log(event.code);
    if (event.key === 'Escape') {
      instance.close();
    }
  }
}

// create galletyItems
function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
		<div class="gallery__item">
		<a class="gallery__link" href="${original}">
		  <img
			 class="gallery__image"
			 src="${preview}"
			 data-source="${original}"
			 alt="${description}"
		  />
		</a>
	 </div>`;
    })
    .join('');
}
