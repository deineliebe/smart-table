import './projectSubHeader.css';
import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import inputStyles from '../../../shared/ui/input.module.css';
import { FC } from 'react';
import { TProject } from '@/shared/model/types';

export type ProjectSubHeaderProps = {
	projects: TProject[];
	setFilteredProjects: (projects: TProject[]) => void;
	setShowModal: (showModal: boolean) => void;
	selectedProjects: number[];
};

const ProjectSubHeader: FC<ProjectSubHeaderProps> = ({
	projects,
	setFilteredProjects,
	setShowModal,
	selectedProjects
}) => {
	const onTabClick = (evt: React.MouseEvent) => {
		document.body
			.querySelector('.subheader-pagination-element-active')
			?.classList.remove('subheader-pagination-element-active');
		const closestButton = (evt?.target as HTMLElement)?.closest('button');
		closestButton?.classList?.add('subheader-pagination-element-active');
		const requiredStatus = closestButton?.querySelector(
			'span:not([class="subheader-pagination-number"])'
		);
		const status = requiredStatus?.innerHTML;
		if (requiredStatus && requiredStatus.innerHTML) {
			if (requiredStatus.innerHTML === 'All') {
				setFilteredProjects(projects);
			} else {
				setFilteredProjects(
					projects?.filter((project) => project.status === status)
				);
			}
		}
	};
	return (
		<section className='subheader'>
			<div
				className={`subheader-upper-part ${selectedProjects.length > 0 && 'subheader-upper-part-with-select'}`}
			>
				{selectedProjects.length > 0 && (
					<div className='subheader-selected'>
						<span>{selectedProjects.length} selected</span>
					</div>
				)}
				<button
					className={`${buttonStyles.button} ${styles.isShadowed} ${styles.isClicked} subheader-calendar-button`}
				>
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M3 1C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1H3ZM5 6.5V9.5H2.5V6.5H5ZM2.5 10.5V13C2.5 13.2761 2.72386 13.5 3 13.5H5V10.5H2.5ZM6 10.5V13.5H9V10.5H6ZM10 10.5V13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V10.5H10ZM10 9.5V6.5H13.5V9.5H10ZM9 6.5H6V9.5H9V6.5ZM4.25 4.5C4.66421 4.5 5 4.16421 5 3.75C5 3.33579 4.66421 3 4.25 3H3.25C2.83579 3 2.5 3.33579 2.5 3.75C2.5 4.16421 2.83579 4.5 3.25 4.5H4.25ZM8.25 4.5C8.66421 4.5 9 4.16421 9 3.75C9 3.33579 8.66421 3 8.25 3H6.75C6.33579 3 6 3.33579 6 3.75C6 4.16421 6.33579 4.5 6.75 4.5H8.25ZM13.5 3.75C13.5 4.16421 13.1642 4.5 12.75 4.5H10.75C10.3358 4.5 10 4.16421 10 3.75C10 3.33579 10.3358 3 10.75 3H12.75C13.1642 3 13.5 3.33579 13.5 3.75Z'
							fill='#464F60'
						/>
					</svg>
				</button>
				<div className='subheader-input'>
					<div className='subheader-filter-block'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M13.79 2.61564C14.3029 1.9591 13.8351 1 13.002 1H3.00186C2.16871 1 1.70091 1.9591 2.21383 2.61564L7.03983 8.72867C7.1772 8.90449 7.25181 9.1212 7.25181 9.34432V14.7961C7.25181 14.9743 7.46724 15.0635 7.59323 14.9375L8.60536 13.9254C8.69913 13.8316 8.75181 13.7044 8.75181 13.5718V9.34432C8.75181 9.1212 8.82643 8.90449 8.96379 8.72867L13.79 2.61564Z'
								fill='#464F60'
							/>
						</svg>
						<select
							className={`${styles.select} ${styles.isClicked} subheader-filter-select`}
							name='filter-bar'
							id='filterBar'
						>
							<option>All</option>
						</select>
					</div>
					<input
						className={`subheader-search ${inputStyles.input} ${inputStyles['input-search-left']} ${styles.isShadowed}`}
						placeholder='Search'
					></input>
				</div>
				<button
					className={`${buttonStyles.button} ${styles.blue} ${styles.isShadowed} ${buttonStyles['button-large-plus']} ${styles.isClicked}`}
					onClick={() => setShowModal(true)}
				>
					<span>New project</span>
				</button>
			</div>
			<div>
				<div className='subheader-pagination'>
					<button
						className={`subheader-pagination-element subheader-pagination-element-active ${styles.isClicked}`}
						onClick={onTabClick}
					>
						<span>All</span>
						<span className='subheader-pagination-number'>
							{projects?.length}
						</span>
					</button>
					<button
						className={`subheader-pagination-element ${styles.isClicked}`}
						onClick={onTabClick}
					>
						<span>At risk</span>
						<span className='subheader-pagination-number'>
							{
								projects?.filter((project) => project.status === 'At risk')
									.length
							}
						</span>
					</button>
					<button
						className={`subheader-pagination-element ${styles.isClicked}`}
						onClick={onTabClick}
					>
						<span>On hold</span>
						<span className='subheader-pagination-number'>
							{
								projects?.filter((project) => project.status === 'On hold')
									.length
							}
						</span>
					</button>
					<button
						className={`subheader-pagination-element ${styles.isClicked}`}
						onClick={onTabClick}
					>
						<span>Potential risk</span>
						<span className='subheader-pagination-number'>
							{
								projects?.filter(
									(project) => project.status === 'Potential risk'
								).length
							}
						</span>
					</button>
					<button
						className={`subheader-pagination-element ${styles.isClicked}`}
						onClick={onTabClick}
					>
						<span>On track</span>
						<span className='subheader-pagination-number'>
							{
								projects?.filter((project) => project.status === 'On track')
									.length
							}
						</span>
					</button>
					<svg
						width='1'
						height='18'
						viewBox='0 0 1 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0.5 1V17'
							stroke='#D5DBE5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<button
						className={`subheader-pagination-element ${styles.isClicked}`}
						onClick={onTabClick}
					>
						<span>Archived</span>
						<span className='subheader-pagination-number'>
							{
								projects?.filter((project) => project.status === 'Archived')
									.length
							}
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProjectSubHeader;
