import './projectSubHeader.css';
import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import inputStyles from '../../../shared/ui/input.module.css';

export const ProjectSubHeader = () => {
	return (
		<div className='subheader'>
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
				<input
					className={`search ${inputStyles.input} ${inputStyles['input-search-left']} ${styles.isShadowed}`}
					placeholder='Search'
				></input>
			</div>
			<button
				className={`${buttonStyles.button} ${styles.blue} ${styles.isShadowed} ${buttonStyles['button-large-plus']} ${styles.isClicked}`}
			>
				<span>New project</span>
			</button>
		</div>
	);
};

export default ProjectSubHeader;
