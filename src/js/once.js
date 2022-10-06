import setFullHeight from './helpers/setFullHeight';
import header from './components/common/header';
import menu from './components/common/menu';
import cookies from './components/common/cookies';

export default () => {
	setFullHeight(); //Set VH variable for mobile safari 100VH, use scss mixin fullheight()
	header();
	// menu();
	cookies();
};
