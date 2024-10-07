import { FC } from 'react';
import { ProjectsListUI } from '../ui';
import { ProjectsListProps } from './type';

export const ProjectsList: FC<ProjectsListProps> = ({ projects }) => {
	const projectByDate = [...projects].sort(
		(a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
	);

	return <ProjectsListUI projectByDate={projectByDate} />;
};

export default ProjectsList;
