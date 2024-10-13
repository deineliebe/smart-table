import './project-list-nav.css';

import styles from '../../../shared/ui/styles.module.css';

const ProjectsListNav = () => (
	<div className='project-list-nav'>
		<label className={`${styles.isClicked}`}>
			<input
				type='checkbox'
				className={`${styles['visually-hidden']}`}
				name='project'
				value='choose-project'
			></input>
			<span></span>
			<span className={`${styles['visually-hidden']}`}>а</span>
		</label>
		<div>
			<span>#</span>
		</div>
		<div>
			<span>Project Name</span>
		</div>
		<span>PM</span>
		<div className='project-list-nav-info'>
			<span>Status</span>
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
					d='M14 8C14 11.3138 11.3138 14 8 14C4.68616 14 2 11.3138 2 8C2 4.68625 4.68616 2 8 2C11.3138 2 14 4.68625 14 8ZM6.70239 6.65747H8.82398V11.1769C8.82398 11.6144 8.46933 11.969 8.03186 11.969C7.59439 11.969 7.23975 11.6144 7.23975 11.1769V8.06226H6.70239C6.31447 8.06226 6 7.74778 6 7.35986C6 6.97194 6.31447 6.65747 6.70239 6.65747ZM7.00977 4.93247C7.00977 4.80778 7.03192 4.69149 7.07587 4.58359C7.12345 4.47236 7.18773 4.37629 7.26909 4.29539C7.35044 4.21449 7.44524 4.15048 7.55383 4.10326C7.60323 4.0824 7.65408 4.06615 7.70674 4.0545C7.77357 4.03987 7.84294 4.03247 7.91485 4.03247C8.03688 4.03247 8.15202 4.05604 8.26061 4.10326C8.29003 4.11599 8.31836 4.12998 8.3456 4.14515C8.41933 4.18623 8.4858 4.23634 8.54536 4.29539C8.62671 4.37629 8.691 4.47236 8.73858 4.58359C8.76328 4.63984 8.7818 4.69835 8.79342 4.75912C8.80432 4.815 8.80977 4.87279 8.80977 4.93247C8.80977 4.99965 8.80287 5.06492 8.78906 5.12822C8.77744 5.18239 8.76037 5.23512 8.73858 5.2864C8.691 5.3943 8.62671 5.48865 8.54536 5.56955C8.50359 5.61099 8.45856 5.64801 8.40989 5.6806C8.3634 5.71157 8.31364 5.73866 8.26061 5.76168C8.15202 5.80891 8.03688 5.83247 7.91485 5.83247C7.85129 5.83247 7.78991 5.82678 7.73071 5.81532C7.66933 5.80358 7.61049 5.7857 7.55383 5.76168C7.44524 5.71446 7.35044 5.65045 7.26909 5.56955C7.18773 5.48865 7.12345 5.3943 7.07587 5.2864C7.03192 5.17517 7.00977 5.05716 7.00977 4.93247Z'
					fill='#868FA0'
				/>
			</svg>
		</div>
		<div>
			<span>Last update</span>
		</div>
		<span>Resources</span>
		<div className='project-list-nav-info'>
			<span>Project timeline</span>
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
					d='M14 8C14 11.3138 11.3138 14 8 14C4.68616 14 2 11.3138 2 8C2 4.68625 4.68616 2 8 2C11.3138 2 14 4.68625 14 8ZM6.70239 6.65747H8.82398V11.1769C8.82398 11.6144 8.46933 11.969 8.03186 11.969C7.59439 11.969 7.23975 11.6144 7.23975 11.1769V8.06226H6.70239C6.31447 8.06226 6 7.74778 6 7.35986C6 6.97194 6.31447 6.65747 6.70239 6.65747ZM7.00977 4.93247C7.00977 4.80778 7.03192 4.69149 7.07587 4.58359C7.12345 4.47236 7.18773 4.37629 7.26909 4.29539C7.35044 4.21449 7.44524 4.15048 7.55383 4.10326C7.60323 4.0824 7.65408 4.06615 7.70674 4.0545C7.77357 4.03987 7.84294 4.03247 7.91485 4.03247C8.03688 4.03247 8.15202 4.05604 8.26061 4.10326C8.29003 4.11599 8.31836 4.12998 8.3456 4.14515C8.41933 4.18623 8.4858 4.23634 8.54536 4.29539C8.62671 4.37629 8.691 4.47236 8.73858 4.58359C8.76328 4.63984 8.7818 4.69835 8.79342 4.75912C8.80432 4.815 8.80977 4.87279 8.80977 4.93247C8.80977 4.99965 8.80287 5.06492 8.78906 5.12822C8.77744 5.18239 8.76037 5.23512 8.73858 5.2864C8.691 5.3943 8.62671 5.48865 8.54536 5.56955C8.50359 5.61099 8.45856 5.64801 8.40989 5.6806C8.3634 5.71157 8.31364 5.73866 8.26061 5.76168C8.15202 5.80891 8.03688 5.83247 7.91485 5.83247C7.85129 5.83247 7.78991 5.82678 7.73071 5.81532C7.66933 5.80358 7.61049 5.7857 7.55383 5.76168C7.44524 5.71446 7.35044 5.65045 7.26909 5.56955C7.18773 5.48865 7.12345 5.3943 7.07587 5.2864C7.03192 5.17517 7.00977 5.05716 7.00977 4.93247Z'
					fill='#868FA0'
				/>
			</svg>
		</div>
		<span>Estimation</span>
	</div>
);

export default ProjectsListNav;
