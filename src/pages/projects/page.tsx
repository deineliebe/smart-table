import { FC } from 'react';
import { Pagination } from '@/widgets/pagination';
import { Project } from '@/entities/project';
//import cls from "./projects.module.scss"

const Projects: FC = () => (
	<>
		<Project />
		<Pagination />
	</>
);

export default Projects;
