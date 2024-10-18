import './pagination.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import styles from '../../../shared/ui/styles.module.css';
import { FC } from 'react';
import { TProject } from '@/shared/model/types';

export type PaginationProps = {
	filteredProjects: TProject[];
	projectsOnPage: number;
	setProjectsOnPage: (cnt: number) => void;
	page: number;
	setPage: (cnt: number) => void;
};

const Pagination: FC<PaginationProps> = ({
	filteredProjects,
	projectsOnPage,
	setProjectsOnPage,
	page,
	setPage
}) => {
	const onChangeProjects = () => {
		const projectsRecievedCnt = Number(
			(document.getElementById('projectsCnt') as HTMLSelectElement).value
		);
		setProjectsOnPage(projectsRecievedCnt);
	};
	const pagesCnt = Math.trunc(filteredProjects.length / projectsOnPage) + 1;
	const onBackButtonClick = () => {
		setPage(page - 1);
	};
	const onNextButtonClick = () => {
		setPage(page + 1);
	};
	return (
		<div className='pagination'>
			<div className='pagination-block'>
				<p>
					{filteredProjects.length > 0 ? 1 + projectsOnPage * (page - 1) : 0}-
					{projectsOnPage * page < filteredProjects.length
						? projectsOnPage * page
						: filteredProjects.length}{' '}
					of {filteredProjects.length}
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
					className={`${buttonStyles.button} ${styles.white} ${buttonStyles['button-small']} ${page !== 1 && styles.isShadowed + ' ' + styles.isClicked}`}
					disabled={page === 1}
					onClick={onBackButtonClick}
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
				<p>
					{page}/{pagesCnt}
				</p>
				<button
					className={`${buttonStyles.button} ${styles.white} ${buttonStyles['button-small']} ${page !== pagesCnt && styles.isShadowed + ' ' + styles.isClicked}`}
					disabled={page === pagesCnt}
					onClick={onNextButtonClick}
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
