import { galleryItems } from "./gallery-items.js";

console.log(basicLightbox);

//  1. Создание и рендер разметки по массиву данных galleryItems
//     и предоставленному шаблону элемента галереи.
//  2. Реализация делегирования на div.gallery и получение url большого изображения.

const gallery = document.querySelector(".gallery");

const imageMarkup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", imageMarkup);

gallery.addEventListener("click", onGalleryClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
	<div class="gallery__item">
  		<a class="gallery__link" href="large-image.jpg">
    		<img
      		class="gallery__image"
      		src="${preview}"
      		data-source="${original}"
      		alt="${description}"
    		/>
  		</a>
	</div>
	`;
    })
    .join("");
}

function onGalleryClick(e) {
  e.preventDefault();

  const isImgEl = e.target.classList.contains("gallery__image");
  if (!isImgEl) {
    return;
  }

  const bigImg = e.target.dataset.source;
  const instance = basicLightbox.create(`< img src = "${bigImg}" >`);

  instance.show();
}
