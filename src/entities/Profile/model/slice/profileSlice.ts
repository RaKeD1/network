import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, action:PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        canselEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
        updateProfile: (state, action:PayloadAction<Profile>) => {
            state.form = {
                ...state.data,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.error = undefined;
            state.data = action.payload;
            state.form = action.payload;
        });
        builder.addCase(updateProfileData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.error = undefined;
            state.data = action.payload;
            state.form = action.payload;
            state.readonly = true;
        });
    },
});

export const {
    actions: profileActions,
    reducer: profileReducer,
} = profileSlice;
