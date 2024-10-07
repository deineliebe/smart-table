import './header.css';
import headingStyles from '../../../shared/ui/heading.module.css';
import Image from 'next/image';
import avatar from '../../../shared/lib/images/Rectangle 1650.jpg';

const Header = () => {
	return (
		<div className='header'>
			<div className='header-block'>
				<p className={headingStyles.mainHeading}>Projects</p>
				<p className='header-number'>0</p>
			</div>
			<div className='header-block'>
				<svg
					id='notification'
					width='25'
					height='26'
					viewBox='0 0 25 26'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5.80597 10.5116C5.80597 6.91535 8.57913 4 12 4C15.4209 4 18.194 6.91535 18.194 10.5116V13.329C18.194 14.4999 18.6829 15.6196 19.5463 16.4265C20.4952 17.3131 19.8566 18.8837 18.5472 18.8837H5.45275C4.14343 18.8837 3.50485 17.3131 4.45368 16.4265C5.31715 15.6196 5.80597 14.4999 5.80597 13.329V10.5116Z'
						fill='#868FA0'
					/>
					<path
						d='M11.9998 24C13.6792 24 15.0407 22.7208 15.0407 21.1428C15.0407 21.1161 15.0403 21.0894 15.0395 21.0628C15.0327 20.8323 14.82 20.6647 14.5747 20.6621L9.4371 20.6074C9.19176 20.6048 8.97505 20.7678 8.96282 20.998C8.96027 21.046 8.95898 21.0943 8.95898 21.1428C8.95898 22.7208 10.3204 24 11.9998 24Z'
						fill='#868FA0'
					/>
					<g filter='url(#filter0_dd_1075_312)'>
						<circle cx='19' cy='6' r='4' fill='#5E5ADB' />
					</g>
					<defs>
						<filter
							id='filter0_dd_1075_312'
							x='13'
							y='0'
							width='12'
							height='13'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'
						>
							<feFlood floodOpacity='0' result='BackgroundImageFix' />
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feMorphology
								radius='2'
								operator='dilate'
								in='SourceAlpha'
								result='effect1_dropShadow_1075_312'
							/>
							<feOffset />
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0.968627 0 0 0 0 0.975163 0 0 0 0 0.988235 0 0 0 1 0'
							/>
							<feBlend
								mode='normal'
								in2='BackgroundImageFix'
								result='effect1_dropShadow_1075_312'
							/>
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feOffset dy='1' />
							<feGaussianBlur stdDeviation='1' />
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
							/>
							<feBlend
								mode='normal'
								in2='effect1_dropShadow_1075_312'
								result='effect2_dropShadow_1075_312'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect2_dropShadow_1075_312'
								result='shape'
							/>
						</filter>
					</defs>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					fill='none'
				>
					<path
						fill='#868FA0'
						fillRule='evenodd'
						d='M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10 4c.5523 0 1 .4477 1 1s-.4477 1-1 1-1-.4477-1-1 .4477-1 1-1Zm0 4c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8ZM9 10c-.55228 0-1.01284-.45466-.87669-.9899C8.56356 7.27927 10.1317 6 12 6c2.21 0 4 1.79 4 4 0 1.2829-.79 1.9733-1.5592 2.6455-.4831.4222-.9579.8371-1.2238 1.3871-.2403.4973-.6647.9674-1.217.9674-.5523 0-1.02-.4554-.8899-.9921.2722-1.1222 1.0022-1.6817 1.6603-2.1862C13.4202 11.3236 14 10.8792 14 10c0-1.1-.9-2-2-2-.7534 0-1.4129.42215-1.7538 1.04157C9.97995 9.52543 9.55228 10 9 10Z'
						clipRule='evenodd'
					/>
				</svg>
				<Image
					className='header-avatar'
					src={avatar}
					width={30}
					height={30}
					alt='Avatar'
				/>
			</div>
		</div>
	);
};

export default Header;
