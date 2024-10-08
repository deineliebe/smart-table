import { FC } from 'react';
import { ProjectsListUI } from '../ui';
import { getProjectData } from '@/shared/lib/store/slices/projects';
import { TProject } from '@/shared/model/types';
import { useSelector } from '@/shared/lib/store/store';

export const ProjectsList: FC = () => {
	const projects: TProject[] = useSelector(getProjectData);
	const projectByDate = [...projects].sort(
		(a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
	);

	return <ProjectsListUI projectByDate={projectByDate} />;
};

export default ProjectsList;
