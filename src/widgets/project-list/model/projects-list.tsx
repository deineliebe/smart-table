import { FC } from 'react';
import { ProjectsListUI } from '../ui';
import { ListProjectProps } from '@/shared/model/types';

export const ProjectsList: FC<ListProjectProps> = ({ projects }) => {
	const projectByDate = [...projects].sort(
		(a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
	);
	return <ProjectsListUI projectByDate={projectByDate} />;
};

export default ProjectsList;
