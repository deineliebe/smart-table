import { TResource, TTag } from '@/shared/model/types';

export type ProjectCardUIProps = {
	projectInfo: TProjectInfo;
};

type TProjectInfo = {
	id: string;
	name: string;
	PM: string;
	tag: TTag;
	last_update: string;
	resources: TResource[];
	start: string;
	end: string;
	estimation: string;
};
