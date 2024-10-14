import { FC } from 'react';
import './addNewProjectForm.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import inputStyles from '../../../shared/ui/input.module.css';
import styles from '../../../shared/ui/styles.module.css';

const AddNewFormUI: FC = ({}) => {
	const onPMClick = (evt: React.MouseEvent) => {
		document.body
			.querySelector('.form-add-project-pm-option-active')
			?.classList.remove('form-add-project-pm-option-active');
		(evt?.target as HTMLElement)?.classList?.add(
			'form-add-project-pm-option-active'
		);
	};
	const onResourceClick = (evt: React.MouseEvent) => {
		(evt?.target as HTMLElement)?.classList?.toggle(
			'form-add-project-buttons-resource-active'
		);
	};
	return (
		<>
			<form className='form-add-project'>
				<p className='modal-add-project-heading'>Add new project</p>
				<section className='modal-add-project-section'>
					<fieldset className='modal-add-project-field'>
						<label
							className='form-add-project-label form-add-project-label-required'
							htmlFor='project_name'
						>
							Project name{' '}
						</label>
						<input
							type='text'
							id='project_name'
							name='project_name'
							className={`${inputStyles.input} form-add-project-input`}
						/>
					</fieldset>
					<fieldset className='modal-add-project-field'>
						<label className='form-add-project-label' htmlFor='pms'>
							Project manager (PM)
						</label>
						<div id='pms' className='form-add-project-buttons-bar'>
							<button
								type='button'
								className={`form-add-project-pm-option form-add-project-pm-option-active ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onPMClick}
							>
								Roger Vaccaro
							</button>
							<button
								type='button'
								className={`form-add-project-pm-option ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onPMClick}
							>
								Tatiana Dias
							</button>
							<button
								type='button'
								className={`form-add-project-pm-option ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onPMClick}
							>
								Leo Gouse
							</button>
						</div>
					</fieldset>
					<fieldset className='modal-add-project-field'>
						<label className='form-add-project-label' htmlFor='resources'>
							Resources
						</label>
						<div id='resources' className='form-add-project-buttons-resource'>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.white} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onResourceClick}
							>
								UX/UI Design
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.white} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onResourceClick}
							>
								Frontend
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.white} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onResourceClick}
							>
								Backend
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.white} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onResourceClick}
							>
								Full Stack
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.white} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onResourceClick}
							>
								Graphic Designer
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.white} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onResourceClick}
							>
								Web Designer
							</button>
							<button
								type='button'
								className={`${buttonStyles.button} ${buttonStyles['button-medium']} ${styles.white} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onResourceClick}
							>
								QA
							</button>
						</div>
					</fieldset>
					<fieldset className='modal-add-project-field'>
						<label className='form-add-project-label' htmlFor='timeline'>
							Project timeline
						</label>
						<div id='timeline' className='modal-add-project-timeline'>
							<select className='form-add-project-select'>
								<option>Custom</option>
							</select>
							<div className='modal-add-project-timestamps'>
								<svg
									width='2'
									height='48'
									viewBox='0 0 2 48'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M1 0V48' stroke='#E9EDF5' />
								</svg>
								<input
									type='text'
									id='start_date'
									name='start_date'
									className={`${inputStyles.input} modal-add-project-timestamp`}
								/>
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
								<input
									type='text'
									id='end_date'
									name='end_date'
									className={`${inputStyles.input} modal-add-project-timestamp`}
								/>
							</div>
						</div>
					</fieldset>
					<fieldset className='modal-add-project-field'>
						<label className='form-add-project-label' htmlFor='estimation'>
							Estimation
						</label>
						<input
							type='text'
							id='estimation'
							name='estimation'
							className={`${inputStyles.input} form-add-project-input`}
							placeholder='00.00'
						/>
					</fieldset>
				</section>
				<div className='modal-add-project-footer'>
					<button
						type='reset'
						className={`${buttonStyles.button} ${buttonStyles['button-large']} ${styles.white}`}
					>
						Cancel
					</button>
					<button
						type='submit'
						className={`${buttonStyles.button} ${buttonStyles['button-large']} ${styles.blue}`}
					>
						Add project
					</button>
				</div>
			</form>
		</>
	);
};

export default AddNewFormUI;
