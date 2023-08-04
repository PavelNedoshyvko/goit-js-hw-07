import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const refs = {
	container: document.querySelector('.gallery'),
};

createMarkup(galleryItems);

new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
});

function createMarkup(gallery) {
	const markupString = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>`).join('');
	
	refs.container.insertAdjacentHTML('beforeend', markupString);
};

