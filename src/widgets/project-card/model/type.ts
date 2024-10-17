import { TProject } from '@/shared/model/types';

export type ProjectCardProps = {
	project: TProject;
	checkProject: (evt: React.MouseEvent) => void;
	isChecked: boolean;
};
