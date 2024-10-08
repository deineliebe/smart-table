import { FC, useEffect } from 'react';
import { Pagination } from '@/widgets/pagination';
import { useDispatch, useSelector } from '@/shared/lib/store/store';
import {
	getLoadingStatus,
	getProjects
} from '@/shared/lib/store/slices/projects';
import { ProjectsList } from '@/widgets/project-list';

const Projects: FC = () => {
	const handleGetProjects = () => {
		dispatch(getProjects());
	};
	const dispatch = useDispatch();
	useEffect(handleGetProjects, []);
	const areProjectsLoading: boolean = useSelector(getLoadingStatus);
	return (
		<>
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
