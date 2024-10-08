import './pagination.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import styles from '../../../shared/ui/styles.module.css';
import { TProject } from '@/shared/model/types';
import { useSelector } from '@/shared/lib/store/store';
import { getProjectData } from '@/shared/lib/store/slices/projects';

const Pagination = () => {
	const projects: TProject[] = useSelector(getProjectData);
	return (
		<div className='pagination'>
			<div className='pagination-block'>
				<p>
					{projects.length}-{projects.length} of {projects.length}
				</p>
			</div>
			<div className='pagination-block'>
				<p>Rows per page:</p>
				<p>20</p>
				<button
					className={`${buttonStyles.button} ${buttonStyles['button-small']} ${styles.canBeShadowed} disabled`}
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
					className={`${buttonStyles.button} ${buttonStyles['button-small']} ${styles.canBeShadowed} disabled`}
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
