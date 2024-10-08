import { getProjectsApi } from '@/shared/api/api';
import { TProject } from '@/shared/model/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//import { v4 as uuidv4 } from 'uuid';

export const getProjects = createAsyncThunk('/projects', getProjectsApi);

export type TProjectState = {
	projectRequest: boolean;
	projects: TProject[] | null;
	error: string | null | undefined;
};

export const initialProject: TProject = {
	id: '',
	name: '',
	PM: '',
	tag: 'Success',
	last_update: '',
	resources: [],
	start: '',
	end: '',
	estimation: ''
};

export const initialProjectState: TProjectState = {
	projectRequest: false,
	projects: [],
	error: null
};

export const projectSlice = createSlice({
	name: 'project',
	initialState: initialProjectState,
	reducers: {},
	selectors: {
		getProjectData: (state) => state
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProjects.pending, (state) => {
				state.error = null;
			})
			.addCase(getProjects.rejected, (state, action) => {
				state.error = action.error.message;
			})
			.addCase(getProjects.fulfilled, (state, action) => {
				state.projects = action.payload;
			});
	}
});

export const {} = projectSlice.actions;

export const { getProjectData } = projectSlice.selectors;
export const projectReducer = projectSlice.reducer;
