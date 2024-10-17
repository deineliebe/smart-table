import { FC } from 'react';
import { ProjectsListUI } from '../ui';
import { TProject } from '@/shared/model/types';

export type ListProjectProps = {
	projects: TProject[];
	checkProject: (evt: React.MouseEvent) => void;
	selectedProjects: number[];
};

export const ProjectsList: FC<ListProjectProps> = ({
	projects,
	checkProject,
	selectedProjects
}) => {
	const projectByDate = [...projects].sort(
		(a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
	);
	return (
		<ProjectsListUI
			projectByDate={projectByDate}
			checkProject={checkProject}
			selectedProjects={selectedProjects}
		/>
	);
};

export default ProjectsList;
