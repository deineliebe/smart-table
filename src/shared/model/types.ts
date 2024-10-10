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

export type TTagLocal = 'On track' | 'Potential risk' | 'On hold' | 'At risk';

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
