import { FC, useEffect } from 'react';
import { Pagination } from '@/widgets/pagination';
import { useDispatch, useSelector } from '@/shared/lib/store/store';
import {
	getLoadingStatus,
	getProjects
} from '@/shared/lib/store/slices/projects';
import { ProjectsList } from '@/widgets/project-list';
import { Header } from '@/widgets/header';
import { ProjectSubHeader } from '@/widgets/project-subheader';
import { ProjectsListNav } from '@/widgets/project-list-nav';

const Projects: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProjects());
	}, []);
	const areProjectsLoading: boolean = useSelector(getLoadingStatus);
	return (
		<>
			<Header />
			<ProjectSubHeader />
			<ProjectsListNav />
			{areProjectsLoading ? (
				<Pagination />
			) : (
				<>
					<ProjectsList />
					<Pagination />
				</>
			)}
		</>
	);
};

export default Projects;
