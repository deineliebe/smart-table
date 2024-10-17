import { FC } from 'react';

import { ProjectsListUIProps } from './type';
import { ProjectCard } from '@/widgets/project-card/model';

export const ProjectsListUI: FC<ProjectsListUIProps> = ({
	projectByDate,
	checkProject,
	selectedProjects
}) => (
	<section>
		{projectByDate.map((project) => (
			<ProjectCard
				project={project}
				checkProject={checkProject}
				isChecked={selectedProjects.includes(project.id)}
				key={project.id}
			/>
		))}
	</section>
);
