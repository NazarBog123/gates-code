// Burger
const mainNavigation = document.getElementById('main-navigation');

document.querySelector('.burger').addEventListener('click', () => {
	mainNavigation.classList.add('active');
	hideScroll();
});

document.querySelector('.burger-menu__close').addEventListener('click', () => {
	mainNavigation.classList.remove('active');
	showScroll();
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

	document.body.style.paddingRight = scrollWidth;
	document.body.style.overflow = 'hidden';

	mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = () => {
	document.body.style.paddingRight = '';
	document.body.style.overflow = 'visible';

	mainNavigation.style.paddingRight = '';
};

const resetNav = () => {
	mainNavigation.classList.remove('active');
	showScroll();
}

window.addEventListener('resize', resetNav);

const getScrollbarWidth = () => {
	const outer = document.createElement('div');

	outer.style.position = 'absolute';
	outer.style.top = '-9999px';
	outer.style.width = '50px';
	outer.style.height = '50px'; 
	outer.style.overflow = 'scroll';
	outer.style.visibility = 'hidden';

	document.body.appendChild(outer);
	const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
	document.body.removeChild(outer);

	return scrollBarWidth;
}


// Sliders
const swiperMain = new Swiper('.swiperMain', {
	loop: true,
	pagination: {
	  	el: '.swiperMain__pagination',
	  	clickable: 'true',
	  	renderBullet: function (index, className) {
			return '<span class="' + className + '">0' + (index + 1) + "</span>";
		},
	},
	navigation: {
	  nextEl: '.swiperMain__next',
	  prevEl: '.swiperMain__prev',
	},
});
const swiperGarage = new Swiper('.swiperGarage', {
	loop: true,
	navigation: {
	  nextEl: '.swiperGarage__next',
	  prevEl: '.swiperGarage__prev',
	},
});
const swiperGallery = new Swiper('.swiperGallery', {
	loop: true,
	spaceBetween: 30,
	navigation: {
	  nextEl: '.swiperGallery__next',
	  prevEl: '.swiperGallery__prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		},

		768: {
			slidesPerView: 2,
		},

		320: {
			// spaceBetween: 0,
			slidesPerView: 1,
		}
	}
});
const swiperOfficial = new Swiper('.swiperOfficial', {
	loop: true,
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiperOfficial__next',
		prevEl: '.swiperOfficial__prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		
		768: {
			slidesPerView: 2,
		},

		320: {
			slidesPerView: 1,
		}
	}
});
const swiperReview = new Swiper('.swiperReview', {
	loop: true,
	navigation: {
		nextEl: '.swiperReview__next',
		prevEl: '.swiperReview__prev',
	},
});
const swiperClient = new Swiper('.swiperClient', {
	loop: true,
	navigation: {
		nextEl: '.swiperClient__next',
		prevEl: '.swiperClient__prev',
	},
	
	breakpoints: {
		768: {
			slidesPerView: 3,
		},

		320: {
			slidesPerView: 2,
		}
	}
});



// FsLightbox
let gallerySlideIndex = 0;
const gallerySlides = document.querySelectorAll('.swiperGallery__slide');
for (const slide of gallerySlides) {
	for (const child of slide.children) {
		child.setAttribute('data-fslightbox', gallerySlideIndex);
	}
	++gallerySlideIndex;
}
let officialSlideIndex = 10;
const officialSlides = document.querySelectorAll('.swiperOfficial__slide');
for (const slide of officialSlides) {
	for (const child of slide.children) {
		if (child.hasAttribute('href')) {
			child.setAttribute('data-fslightbox', officialSlideIndex);
		}
	}
	++officialSlideIndex;
}
refreshFsLightbox();

// Tabs and Accordions
const tabContent = document.querySelectorAll('.share-content');
const tabBtn = document.querySelectorAll('.share__tab-btn');
const accordion = document.querySelectorAll('.share__accordion');
const accordionTitle = document.querySelectorAll('.share__accordion-title');

for (const title of accordionTitle) {
	title.addEventListener('click', () => {
		for (const acc of accordion) {
			acc.classList.remove('active');
		}
		title.parentNode.classList.add('active');
		for (const btn of tabBtn) {
			btn.classList.remove('active');
			if (title.parentNode.getAttribute('data-accordion') == btn.getAttribute('data-accordion-btn')) {
				btn.classList.add('active');
			}
		}
	});
}

for (const btn of tabBtn) {
	btn.addEventListener('click', () => {
		for (const btn2 of tabBtn) {
			btn2.classList.remove('active');
		}
		btn.classList.add('active');
		const btnIndex = btn.getAttribute('data-tab-btn');
		for (const content of tabContent) {
			content.classList.remove('active');
			const contentIndex = content.getAttribute('data-tab-content');
			if (btnIndex == contentIndex) {
				content.classList.add('active');
			}
		}
		for (const acc of accordion) {
			acc.classList.remove('active');
			if (acc.getAttribute('data-accordion') == btn.getAttribute('data-accordion-btn')) {
				acc.classList.add('active');
			}
		}
	});
}

// Modals
const priceModal = document.querySelectorAll('.popup-price');
const btnOpenPriceModal = document.querySelectorAll('.open-price-modal');

for (const btn of btnOpenPriceModal) {
	if (btn.hasAttribute('data-gates-btn')) {
		btn.addEventListener('click', () => {
			for (const modal of priceModal) {
				if (modal.getAttribute('data-gates-modal') == btn.getAttribute('data-gates-btn')) {
					modal.classList.add('active');
					return false;
				}
			}
		});
	}
	if (btn.hasAttribute('data-dver-btn')) {
		btn.addEventListener('click', () => {
			for (const modal of priceModal) {
				if (modal.getAttribute('data-dver-modal') == btn.getAttribute('data-dver-btn')) {
					modal.classList.add('active');
					return false;
				}
			}
		});
	}
	if (btn.hasAttribute('data-pr-btn')) {
		btn.addEventListener('click', () => {
			for (const modal of priceModal) {
				if (modal.getAttribute('data-pr-modal') == btn.getAttribute('data-pr-btn')) {
					modal.classList.add('active');
					return false;
				}
			}
		});
	}	
}

const btnCloseModal = document.querySelectorAll('.close-modal');
const overlayBg = document.querySelectorAll('.overlay-bg');

const offerModal = document.querySelector('.popup-oferta');
const btnOpenOfferModal = document.querySelector('.ofertamodal');

const securityModal = document.querySelector('.popup-conf');
const btnOpenSecurityModal = document.querySelectorAll('.politikamodal');

const serviceModal = document.querySelectorAll('.popup-service');
const btnOpenServiceModal = document.querySelectorAll('.services-open-modal');

const btnOfferCall = document.querySelectorAll('.offer-call-btn');
const callModal = document.querySelector('.popup-call');

for (const btn of btnCloseModal) {
	btn.addEventListener('click', () => {
		btn.parentNode.parentNode.classList.remove('active');
		showScroll();
	});
}

for (const bg of overlayBg) {
	bg.addEventListener('click', () => {
		bg.parentNode.classList.remove('active');
		showScroll();
	});
}


for (let index = 0; index < btnOpenServiceModal.length; index++) {
	const btn = btnOpenServiceModal[index];
	btn.addEventListener('click', () => {
		for (const modal of serviceModal) {
			if (modal.getAttribute('data-service-modal') == index + 1) {
				modal.classList.add('active');
				hideScroll();
			}
		}
	});	
}

// btnOpenOfferModal.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	callModal.classList.remove('active');
// 	offerModal.classList.add('active');
// 	hideScroll();
// });


for (const btn of btnOpenSecurityModal) {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		callModal.classList.remove('active');
		securityModal.classList.add('active');
		hideScroll();
	});
}

for (const btn of btnOfferCall) {
	btn.addEventListener('click', () => {
		for (const modal of serviceModal) {
			modal.classList.remove('active');
		}
		for (const modal of priceModal) {
			modal.classList.remove('active');
		}
		callModal.classList.add('active');
		hideScroll();
	});
}

// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[data-smooth="smooth"]');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute('href');
		mainNavigation.classList.remove('active');
		showScroll();
		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	 });
};