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
	const [showModal, setShowModal] = useState(false);
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
	return (
		<>
			<Header projects={projects} />
			<ProjectSubHeader
				projects={projects}
				setFilteredProjects={setFilteredProjects}
				setShowModal={setShowModal}
			/>
			<ProjectsListNav />
			{!areProjectsLoading && (
				<>
					<ProjectsList projects={visibleProjects} />
				</>
			)}
			<Pagination
				filteredProjects={filteredProjects}
				projectsOnPage={projectsOnPage}
				setProjectsOnPage={setProjectsOnPage}
				page={page}
				setPage={setPage}
			/>
			{showModal && (
				<Modal title={''} onClose={() => setShowModal(false)}>
					<AddNewForm />
				</Modal>
			)}
		</>
	);
};

export default Projects;
