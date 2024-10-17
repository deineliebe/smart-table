import { FC } from 'react';
import { ProjectCardUI } from '../ui';
import { ProjectCardProps } from './type';

export const ProjectCard: FC<ProjectCardProps> = ({
	project,
	checkProject,
	isChecked
}) => {
	return (
		<ProjectCardUI
			projectInfo={project}
			checkProject={checkProject}
			isChecked={isChecked}
		/>
	);
};
