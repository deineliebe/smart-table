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

export type TProject = {
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

export type TUser = {
	name: string;
};
