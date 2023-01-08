import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryBox = document.querySelector('.gallery');
const galleryItem = createGaller(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryItem);

function createGaller(items) {
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

galleryBox.addEventListener('click', onGalleryBoxClick);

function onGalleryBoxClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const largeItemUrl = getLArgeUrlItem(event);
  console.log(largeItemUrl);

  const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

  instance.show();
}

function getLArgeUrlItem(item) {
  return item.target.dataset.source;
}
