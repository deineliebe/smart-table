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
	const [showAddProjectModal, setShowAddProjectModal] = useState(false);
	const [selectedProjects, setSelectedProjects] = useState<number[]>([]);
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

	const checkProject = (evt: React.MouseEvent) => {
		const closestProject = (evt?.target as HTMLElement)?.closest('.project');
		const closestProjectId = Number(
			closestProject?.querySelector('p[class="project-id"]')?.innerHTML
		);
		const newSelectedProjects: number[] = [];
		console.log(document.getElementById('project-main-id-checkbox'));
		if (selectedProjects.includes(closestProjectId)) {
			selectedProjects.forEach((project) => {
				if (project != closestProjectId) newSelectedProjects.push(project);
			});
		} else {
			selectedProjects.forEach((project) => {
				newSelectedProjects.push(project);
			});
			newSelectedProjects.push(closestProjectId);
		}
		setSelectedProjects(newSelectedProjects);
	};

	const onMainCheckboxClick = () => {
		if (selectedProjects.length) {
			setSelectedProjects([]);
		} else {
			const newIds: number[] = [];
			filteredProjects.forEach((project) => {
				newIds.push(project.id);
			});
			setSelectedProjects(newIds);
		}
	};

	return (
		<>
			<Header projects={projects} />
			<ProjectSubHeader
				projects={projects}
				setFilteredProjects={setFilteredProjects}
				setShowModal={setShowAddProjectModal}
				selectedProjects={selectedProjects}
			/>
			<ProjectsListNav
				selectedProjects={selectedProjects}
				onMainCheckboxClick={onMainCheckboxClick}
			/>
			{!areProjectsLoading && (
				<>
					<ProjectsList
						projects={visibleProjects}
						checkProject={checkProject}
						selectedProjects={selectedProjects}
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
					onClose={() => setShowAddProjectModal(false)}
				>
					<AddNewForm projects={projects} />
				</Modal>
			)}
		</>
	);
};

export default Projects;
