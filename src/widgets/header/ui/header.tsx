import './header.css';
import headingStyles from '../../../shared/ui/heading.module.css';
import Link from 'next/link';

const Header = () => {
	return (
		<div className='header'>
			<div className='header-block'>
				<p className={headingStyles.mainHeading}>Projects</p>
				<p className='header-number'>0</p>
			</div>
			<div className='header-block'>
				<Link className={headingStyles.heading} href='/profile'>
                    Profile
				</Link>
			</div>
		</div>
	);
};

export default Header;
