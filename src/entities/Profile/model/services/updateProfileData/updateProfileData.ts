import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrors[]>>(
        'profile/updateProfileData',
        async (_, thunkAPI) => {
            const { rejectWithValue, extra, getState } = thunkAPI;

            const formData = getProfileForm(getState());

            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>('/profile', formData);
                return response.data;
            } catch (e) {
                console.error('Error: ', e);
                return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
            }
        },
    );
