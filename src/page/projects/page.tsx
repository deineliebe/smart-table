import { FC, useEffect } from 'react';
import { Pagination } from '@/widgets/pagination';
import { useDispatch } from '@/shared/lib/store/store';
import { getProjects } from '@/shared/lib/store/slices/projects';

const Projects: FC = () => {
	const handleGetProjects = () => {
		console.log(dispatch(getProjects()));
	};
	const dispatch = useDispatch();
	useEffect(handleGetProjects, []);
	return (
		<>
			<Pagination />
		</>
	);
};

export default Projects;
