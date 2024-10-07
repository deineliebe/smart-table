import './pagination.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import styles from '../../../shared/ui/styles.module.css';

const Pagination = () => {
	return (
		<div className='pagination'>
			<div className='pagination-block'>
				<p>1-20 of 27</p>
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
				<p>1/2</p>
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
