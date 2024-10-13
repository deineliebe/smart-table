import { FC, useEffect, useState } from 'react';
import { Pagination } from '@/widgets/pagination';
import { useDispatch, useSelector } from '@/shared/lib/store/store';
import {
	getLoadingStatus,
	getProjectData,
	getProjects
} from '@/shared/lib/store/slices/projects';
import { ProjectsList } from '@/widgets/project-list';
import { Header } from '@/widgets/header';
import { ProjectSubHeader } from '@/widgets/project-subheader';
import { ProjectsListNav } from '@/widgets/project-list-nav';
import { TProject } from '@/shared/model/types';

const Projects: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProjects());
	}, []);
	const areProjectsLoading: boolean = useSelector(getLoadingStatus);
	const projects: TProject[] = useSelector(getProjectData);
	const [visibleProjects, setVisibleProjects] = useState(projects);
	useEffect(() => {
		setVisibleProjects(projects);
	}, [areProjectsLoading]);
	return (
		<>
			<Header projects={projects} />
			<ProjectSubHeader
				projects={projects}
				setVisibleProjects={setVisibleProjects}
			/>
			<ProjectsListNav />
			{!areProjectsLoading && (
				<>
					<ProjectsList projects={visibleProjects} />
				</>
			)}
			<Pagination
				projects={projects}
				visibleProjects={visibleProjects}
				setVisibleProjects={setVisibleProjects}
			/>
		</>
	);
};

export default Projects;
