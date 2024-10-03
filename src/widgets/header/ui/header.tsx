import './header.css';
import headingStyles from '../../../shared/ui/heading.module.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='header-block'>
				<p className={headingStyles.mainHeading}>Projects</p>
				<p className='header-number'>0</p>
			</div>
		</div>
	);
};

export default Header;
