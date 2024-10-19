import { FC, SyntheticEvent, useRef, useState } from 'react';
import './addNewProjectForm.css';
import formStyles from '../../../shared/ui/form.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import inputStyles from '../../../shared/ui/input.module.css';
import styles from '../../../shared/ui/styles.module.css';
import { useDispatch } from '@/shared/lib/store/store';
import { addProject } from '@/shared/lib/store/slices/projects';
import { TProject, TResource } from '@/shared/model/types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

type AddNewFormProps = {
	projects: TProject[];
};

const AddNewFormUI: FC<AddNewFormProps> = ({ projects }) => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const barRef = useRef(null);
	const dispatch = useDispatch();
	const onPMClick = (evt: React.MouseEvent) => {
		document.body
			.querySelector(`.${formStyles['form-button-in-bar-active']}`)
			?.classList.remove(`${formStyles['form-button-in-bar-active']}`);
		(evt?.target as HTMLElement)?.classList?.add(
			`${formStyles['form-button-in-bar-active']}`
		);
	};
	const onResourceClick = (evt: React.MouseEvent) => {
		(evt?.target as HTMLElement)?.classList?.toggle(`${styles.blue}`);
		(evt?.target as HTMLElement)?.classList?.toggle(`${styles.white}`);
	};
	const date = new Date();
	const handleSubmit = (e: SyntheticEvent) => {
		const formData = document.getElementById('add-project') as HTMLFormElement;
		e.preventDefault();
		const resourcesList: TResource[] = [];
		const resources = formData.querySelectorAll(
			'.add-project-buttons-resource-active'
		);
		resources.forEach((resource) => {
			resourcesList.push(
				(resource as HTMLButtonElement)?.innerText as TResource
			);
		});
		const newProject: TProject = {
			id: projects.length + 1,
			name: (document.getElementById('project_name') as HTMLInputElement)
				?.value,
			PM: (
				formData.querySelector('.add-project-pm-option') as HTMLButtonElement
			)?.innerText,
			status: 'On track',
			last_update: date.toLocaleString('en-us', {
				day: 'numeric',
				month: 'short',
				year: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			}),
			resources: resourcesList,
			start: startDate.toLocaleDateString('en-us', {
				day: 'numeric',
				month: 'short',
				year: 'numeric'
			}),
			end: endDate.toLocaleDateString('en-us', {
				day: 'numeric',
				month: 'short',
				year: 'numeric'
			}),
			estimation: (document.getElementById('estimation') as HTMLInputElement)
				?.value
		};
		const newProjects: TProject[] = [];
		projects.forEach((project) => {
			newProjects.push(project);
		});
		newProjects.push(newProject);
		dispatch(addProject(newProjects));
	};
	return (
		<>
			<form
				id='add-project'
				name='add-project'
				className='add-project'
				onSubmit={handleSubmit}
			>
				<p className={`${formStyles['form-heading']} add-project-heading`}>
					Add new project
				</p>
				<section
					className={`${formStyles['form-section']} add-project-section`}
				>
					<fieldset className={`${formStyles['form-field']}`}>
						<label
							className={`${formStyles['form-label']} add-project-label-required`}
							htmlFor='project_name'
						>
							Project name{' '}
						</label>
						<input
							type='text'
							id='project_name'
							name='project_name'
							className={`${inputStyles.input} add-project-input`}
							required
						/>
					</fieldset>
					<fieldset className={`${formStyles['form-field']}`}>
						<label className={`${formStyles['form-label']}`} htmlFor='pms'>
							Project manager (PM)
						</label>
						<div
							id='pms'
							className={`${formStyles['form-buttons-bar']}`}
							ref={barRef}
						>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${formStyles['form-button-in-bar-active']} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onPMClick}
							>
								Roger Vaccaro
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onPMClick}
							>
								Tatiana Dias
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onPMClick}
							>
								Leo Gouse
							</button>
						</div>
					</fieldset>
					<fieldset className={`${formStyles['form-field']}`}>
						<label
							className={`${formStyles['form-label']}`}
							htmlFor='resources'
						>
							Resources
						</label>
						<div id='resources' className='add-project-buttons-resources'>
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
					<fieldset className={`${formStyles['form-field']}`}>
						<label className={`${formStyles['form-label']}`} htmlFor='timeline'>
							Project timeline
						</label>
						<div id='timeline' className='modal-add-project-timeline'>
							<select className='add-project-select'>
								<option>Custom</option>
								<option>1 year</option>
								<option>4-6 months</option>
								<option>3 months</option>
								<option>1-2 months</option>
								<option>1 month</option>
								<option>15 days</option>
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
								<DatePicker
									selected={startDate}
									onChange={(date) => {
										if (date) setStartDate(date);
									}}
									dateFormat='dd/MM/yyyy'
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
								<DatePicker
									selected={endDate}
									onChange={(date) => {
										if (date) setEndDate(date);
									}}
									dateFormat='dd/MM/yyyy'
									className={`${inputStyles.input} modal-add-project-timestamp`}
								/>
							</div>
						</div>
					</fieldset>
					<fieldset className={`${formStyles['form-field']}`}>
						<label
							className={`${formStyles['form-label']}`}
							htmlFor='estimation'
						>
							Estimation
						</label>
						<input
							type='text'
							id='estimation'
							name='estimation'
							className={`${inputStyles.input} add-project-input`}
							placeholder='00.00'
						/>
					</fieldset>
				</section>
				<div className={`${formStyles['form-footer']}`}>
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
