import React, { FC } from 'react';

import styles from '../../../shared/ui/styles.module.css';
import './project-card.css';
import { ProjectCardUIProps } from './type';
import Link from 'next/link';
import { Tag } from '@/widgets/tag/model';

export const ProjectCardUI: FC<ProjectCardUIProps> = ({
	projectInfo,
	checkProject,
	isChecked
}) => {
	return (
		<div className='project'>
			<label className={`${styles.isClicked}`}>
				<input
					type='checkbox'
					className={`${styles['visually-hidden']}`}
					name='project'
					value='choose-project'
					onClick={checkProject}
					checked={isChecked}
				></input>
				<span className='default-checkbox'></span>
				<span className={`${styles['visually-hidden']}`}>а</span>
			</label>
			<svg
				className={`${styles.isClicked}`}
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
			<p className='project-id'>{projectInfo.id}</p>
			<Link
				className={`project-name ${styles.isClicked}`}
				href={`/project:${projectInfo.id}`}
			>
				{projectInfo.name}
			</Link>
			<p className='project-project-manager'>PM</p>
			<Tag tag={projectInfo.status} />
			<div className='project-update'>
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
				<span>{projectInfo.last_update}</span>
			</div>
			<p
				className={`project-resorces ${!projectInfo.resources.length && 'project-resources-empty'}`}
			>
				{projectInfo.resources.length ? (
					projectInfo.resources.length
				) : (
					<svg
						width='14'
						height='14'
						viewBox='0 0 14 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M6.99999 1.75C7.36243 1.75 7.65624 2.04381 7.65624 2.40625V6.34375H11.5937C11.9562 6.34375 12.25 6.63756 12.25 7C12.25 7.36244 11.9562 7.65625 11.5937 7.65625H7.65624V11.5937C7.65624 11.9562 7.36243 12.25 6.99999 12.25C6.63755 12.25 6.34374 11.9562 6.34374 11.5937V7.65625H2.40625C2.04381 7.65625 1.75 7.36244 1.75 7C1.75 6.63756 2.04381 6.34375 2.40625 6.34375H6.34374V2.40625C6.34374 2.04381 6.63755 1.75 6.99999 1.75Z'
							fill='#464F60'
						/>
					</svg>
				)}
			</p>
			<div className='project-timeline'>
				<span className='project-timeline-date'>
					{projectInfo.start ? projectInfo.start : '-'}
				</span>
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
				<span className='project-timeline-date'>
					{projectInfo.end ? projectInfo.end : '-'}
				</span>
			</div>
			<p>{projectInfo.estimation}</p>
		</div>
	);
};
