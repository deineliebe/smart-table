import { TResource, TTagLocal } from '@/shared/model/types';

export type ProjectCardUIProps = {
	projectInfo: TProjectInfo;
	checkProject: (evt: React.MouseEvent) => void;
	isChecked: boolean;
};

type TProjectInfo = {
	id: number;
	name: string;
	PM: string;
	status: TTagLocal;
	last_update: string;
	resources: TResource[];
	start: string;
	end: string;
	estimation: string;
};
