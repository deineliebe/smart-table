import { FC } from 'react';
import { ProjectCardUI } from '../ui';
import { ProjectCardProps } from './type';

export const ProjectCard: FC<ProjectCardProps> = ({
	project,
	checkProject
}) => {
	return <ProjectCardUI projectInfo={project} checkProject={checkProject} />;
};
