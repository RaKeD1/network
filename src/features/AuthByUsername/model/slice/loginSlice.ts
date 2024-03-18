import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { User } from 'entities/User';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state, action) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(loginByUsername.fulfilled, (state, action: PayloadAction<User>) => {
            state.isLoading = false;
            state.error = undefined;
            state.username = action.payload.username;
        });
    },
});

export const {
    actions: loginActions,
    reducer: loginReducer,
} = loginSlice;
