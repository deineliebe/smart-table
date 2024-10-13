import './pagination.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import styles from '../../../shared/ui/styles.module.css';
import { ListProjectWithVisibleValuesProps } from '@/shared/model/types';
import { FC } from 'react';

const Pagination: FC<ListProjectWithVisibleValuesProps> = ({
	projects,
	visibleProjects,
	setVisibleProjects
}) => {
	const onChangeProjects = () => {
		const projectsRecievedCnt = Number(
			(document.getElementById('projectsCnt') as HTMLSelectElement).value
		);
		const projectsCnt =
			projectsRecievedCnt > projects.length
				? projects.length
				: projectsRecievedCnt;
		console.log(projectsCnt);
		console.log(projects.slice(0, projectsCnt));
		setVisibleProjects(projects.slice(0, projectsCnt));
	};
	return (
		<div className='pagination'>
			<div className='pagination-block'>
				<p>
					{visibleProjects.length}-{visibleProjects.length} of {projects.length}
				</p>
			</div>
			<div className='pagination-block'>
				<p>Rows per page:</p>
				<select
					className={`${styles.select} ${styles.isClicked} pagination-select`}
					name='projects-on-page'
					id='projectsCnt'
					onChange={onChangeProjects}
				>
					<option value='5'>5</option>
					<option value='10'>10</option>
					<option value='15'>15</option>
					<option value='20'>20</option>
					<option value='30'>30</option>
					<option value='40'>40</option>
					<option value='50'>50</option>
				</select>
				<button
					className={`${buttonStyles.button} ${buttonStyles['button-small']} ${styles.isShadowed} ${styles.isClicked} disabled`}
				>
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9.5 11L6.5 8L9.5 5'
							stroke='#868FA0'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
				<p>1/1</p>
				<button
					className={`${buttonStyles.button} ${buttonStyles['button-small']} ${styles.isShadowed} ${styles.isClicked} disabled`}
				>
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M6.5 11L9.5 8L6.5 5'
							stroke='#868FA0'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Pagination;
