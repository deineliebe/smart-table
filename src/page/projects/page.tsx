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
import { Modal } from '@/widgets/modal/model';
import { AddNewForm } from '@/widgets/add-project-form';

const Projects: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProjects());
	}, []);
	const areProjectsLoading: boolean = useSelector(getLoadingStatus);
	const projects: TProject[] = useSelector(getProjectData);
	const [filteredProjects, setFilteredProjects] = useState(projects);
	const [visibleProjects, setVisibleProjects] = useState(projects);
	const [projectsOnPage, setProjectsOnPage] = useState(5);
	const [page, setPage] = useState(1);
	const [showAddProjectModal, setShowAddProjectModalShowModal] =
		useState(false);
	useEffect(() => {
		setFilteredProjects(projects);
	}, [areProjectsLoading]);
	useEffect(() => {
		setPage(1);
		setVisibleProjects(
			filteredProjects.slice(projectsOnPage * (page - 1), projectsOnPage * page)
		);
	}, [filteredProjects, projectsOnPage]);
	useEffect(() => {
		setVisibleProjects(
			filteredProjects.slice(projectsOnPage * (page - 1), projectsOnPage * page)
		);
	}, [page]);
	const [selectedProjects, setSelectedProjects] = useState<TProject[]>([]);
	const checkProject = (evt: React.MouseEvent) => {
		//const closestProject = (evt?.target as HTMLElement)?.closest('.project');
		console.log(evt);
		const newSelectedProjects: TProject[] = [];
		selectedProjects.forEach((project) => {
			newSelectedProjects.push(project);
		});
		//newSelectedProjects.push(closestProject);
		setSelectedProjects(newSelectedProjects);
	};
	return (
		<>
			<Header projects={projects} />
			<ProjectSubHeader
				projects={projects}
				setFilteredProjects={setFilteredProjects}
				setShowModal={setShowAddProjectModalShowModal}
				selectedProjects={selectedProjects}
			/>
			<ProjectsListNav selectedProjects={selectedProjects} />
			{!areProjectsLoading && (
				<>
					<ProjectsList
						projects={visibleProjects}
						checkProject={checkProject}
					/>
				</>
			)}
			<Pagination
				filteredProjects={filteredProjects}
				projectsOnPage={projectsOnPage}
				setProjectsOnPage={setProjectsOnPage}
				page={page}
				setPage={setPage}
			/>
			{showAddProjectModal && (
				<Modal
					title={'Add new project'}
					onClose={() => setShowAddProjectModalShowModal(false)}
				>
					<AddNewForm projects={projects} />
				</Modal>
			)}
		</>
	);
};

export default Projects;
