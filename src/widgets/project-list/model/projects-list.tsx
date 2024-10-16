import { FC } from 'react';
import { ProjectsListUI } from '../ui';
import { TProject } from '@/shared/model/types';

export type ListProjectProps = {
	projects: TProject[];
	checkProject: (evt: React.MouseEvent) => void;
};

export const ProjectsList: FC<ListProjectProps> = ({
	projects,
	checkProject
}) => {
	const projectByDate = [...projects].sort(
		(a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
	);
	return (
		<ProjectsListUI projectByDate={projectByDate} checkProject={checkProject} />
	);
};

export default ProjectsList;
