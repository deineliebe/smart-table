import { FC } from 'react';

import { ProjectsListUIProps } from './type';
import { ProjectCard } from '@/widgets/project-card/model';

export const ProjectsListUI: FC<ProjectsListUIProps> = ({ projectByDate }) => (
	<section>
		{projectByDate.map((project) => (
			<ProjectCard project={project} key={1} />
		))}
	</section>
);
