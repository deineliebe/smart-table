import React, { FC } from 'react';

import './project-card.css';
import { ProjectCardUIProps } from './type';

export const ProjectCardUI: FC<ProjectCardUIProps> = ({ projectInfo }) => {
	console.log(projectInfo);
	return (
		<div className='project'>
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
		</div>
	);
};
