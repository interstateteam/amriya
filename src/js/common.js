import { scrollTo } from './helpers/scroll-to';
import form from './components/common/form';
import booking from './components/common/booking';
import ticker from './components/sections/ticker';
import homeDineSlider from './components/sections/home-dine-slider';
import cardsCarousel from './components/sections/cards-carousel';
import imagedDetailsSlider from './components/sections/imaged-details-slider';
import roomHeroSlider from './components/sections/room-hero-slider';
import fullWidthSlider from './components/sections/full-width-slider';
import otherRooms from './components/sections/other-rooms';
import asideAnchors from './components/sections/aside-anchors';

export default () => {
	scrollTo({
		offset: 100
	});
	form();
	booking();
	ticker();
	homeDineSlider();
	cardsCarousel();
	imagedDetailsSlider();
	roomHeroSlider();
	fullWidthSlider();
	otherRooms();
	asideAnchors();
};
