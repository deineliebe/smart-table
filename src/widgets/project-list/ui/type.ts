import { TProject } from '@/shared/model/types';

export type ProjectsListUIProps = {
	projectByDate: TProject[];
	checkProject: (evt: React.MouseEvent) => void;
	selectedProjects: number[];
};
