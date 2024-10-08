import React, { FC } from 'react';

import './project-card.css';
import { ProjectCardUIProps } from './type';

export const ProjectCardUI: FC<ProjectCardUIProps> = ({ projectInfo }) => {
	console.log(projectInfo);
	return (
		<div className='project'>
			<input type='checkbox' name='project' value='choose-project'></input>
			<svg
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M6.46967 9.96967C6.17678 10.2626 6.17678 10.7374 6.46967 11.0303C6.76256 11.3232 7.23744 11.3232 7.53033 11.0303L10.0303 8.53033C10.3232 8.23744 10.3232 7.76256 10.0303 7.46967L7.53033 4.96967C7.23744 4.67678 6.76256 4.67678 6.46967 4.96967C6.17678 5.26256 6.17678 5.73744 6.46967 6.03033L8.43934 8L6.46967 9.96967Z'
					fill='#868FA0'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5Z'
					fill='#868FA0'
				/>
			</svg>
			<p>1</p>
			<p>Allosaurus web app</p>
			<p>PM</p>
			<div>
				<svg
					width='6'
					height='6'
					viewBox='0 0 6 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<rect width='6' height='6' rx='2' fill='#38A06C' />
				</svg>
				<span>On track</span>
			</div>
			<div>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1.75 12C1.75 13.2426 2.75736 14.25 4 14.25H10.2485C10.5513 14.25 10.8438 14.1401 11.0717 13.9407L13.8231 11.5332C14.0944 11.2958 14.25 10.9529 14.25 10.5925V4C14.25 2.75736 13.2426 1.75 12 1.75H4C2.75736 1.75 1.75 2.75736 1.75 4V12Z'
						stroke='#5E5ADB'
						strokeWidth='1.5'
					/>
					<path
						d='M5.25 6.5H10.75'
						stroke='#5E5ADB'
						strokeWidth='1.5'
						strokeLinecap='round'
					/>
					<path
						d='M5.25 9.5H8.75'
						stroke='#5E5ADB'
						strokeWidth='1.5'
						strokeLinecap='round'
					/>
				</svg>
				<span>15 Mar 2021, 12:47 PM</span>
			</div>
			<p>3</p>
			<div>
				<span>15 May 2021</span>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M6.46967 9.96967C6.17678 10.2626 6.17678 10.7374 6.46967 11.0303C6.76256 11.3232 7.23744 11.3232 7.53033 11.0303L10.0303 8.53033C10.3232 8.23744 10.3232 7.76256 10.0303 7.46967L7.53033 4.96967C7.23744 4.67678 6.76256 4.67678 6.46967 4.96967C6.17678 5.26256 6.17678 5.73744 6.46967 6.03033L8.43934 8L6.46967 9.96967Z'
						fill='#868FA0'
					/>
				</svg>
				<span>15 Aug 2021</span>
			</div>
			<p>US$ 10.5k</p>
		</div>
	);
};
