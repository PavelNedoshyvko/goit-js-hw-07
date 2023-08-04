import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const refs = {
	container: document.querySelector('.gallery'),
};

refs.container.addEventListener('click', onContainerClick);

createMarkup(galleryItems);


function createMarkup(gallery) {
	const markupString = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
  <a class="gallery__link" href= ${original}>
    <img
      class="gallery__image"
      src= ${preview}
      data-source= ${original}
      alt= ${description}
    />
  </a>
</li>`).join('');
	
	refs.container.insertAdjacentHTML('beforeend', markupString);
};

function onContainerClick(evt) {
	evt.preventDefault();

	if (!evt.target.classList.contains('gallery__image')) {
		return;
	}
	const {source} = evt.target.dataset;
	const currentgalleryItem = galleryItems.find(({ original }) => original === source);

	const instance = basicLightbox.create(`
    <img src="${currentgalleryItem.original}" width="800" height="600">
  `,{
		onShow: () => document.addEventListener('keydown', onEscapeKeyDown),
		onClose: () => document.removeEventListener('keydown', onEscapeKeyDown),
	});

	instance.show();

	function onEscapeKeyDown(evt) { 
	if (evt.code === "Escape") {
		instance.close();
	}
	};
};