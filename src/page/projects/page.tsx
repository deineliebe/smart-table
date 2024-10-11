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

const Projects: FC = () => {
	const dispatch = useDispatch();
	const handleGetProjects = () => {
		dispatch(getProjects());
	};
	useEffect(handleGetProjects, []);
	const areProjectsLoading: boolean = useSelector(getLoadingStatus);
	return (
		<>
			{areProjectsLoading ? (
				<Pagination />
			) : (
				<>
					<Header />
					<ProjectSubHeader />
					<ProjectsList />
					<Pagination />
				</>
			)}
		</>
	);
};

export default Projects;
