import 'app/styles/index.scss';
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { Suspense } from 'react';

export const ProviderDecorator = (state: DeepPartial<StateSchema>):Decorator => (Story) => (
    <StoreProvider initialState={state}>
        <Suspense fallback="">
            <Story />
        </Suspense>
    </StoreProvider>

);
