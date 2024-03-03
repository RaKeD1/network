import 'app/styles/index.scss';
import { Decorator } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const ProviderDecorator: Decorator = (Story) => (
    <StoreProvider>
        <Story />
    </StoreProvider>

);
