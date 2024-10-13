export type TResource =
	| 'UX/UI Design'
	| 'Frontend'
	| 'Backend'
	| 'Full Stack'
	| 'Graphic Designer'
	| 'Web Designer'
	| 'QA';

export type TTag =
	| 'Success'
	| 'Warning'
	| 'Error'
	| 'Active'
	| 'Info'
	| 'Inactive';

export type TTagLocal =
	| 'On track'
	| 'Potential risk'
	| 'On hold'
	| 'At risk'
	| 'Archived';

export type TProject = {
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

export type TUser = {
	name: string;
};

export type ListProjectProps = {
	projects: TProject[];
};

export type ListProjectWithChangeProps = ListProjectProps & {
	projects: TProject[];
	setVisibleProjects: (projects: TProject[]) => void;
};
