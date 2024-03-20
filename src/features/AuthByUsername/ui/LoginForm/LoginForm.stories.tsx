import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { ProviderDecorator } from 'shared/config/storybook/ProviderDecorator/ProviderDecorator';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.LIGHT),
        ProviderDecorator({ loginForm: { username: '1234', password: '1234' } })],
};

export const PrimaryDark: Story = {
    args: {
    },
    decorators: [ProviderDecorator({ loginForm: { username: '1234', password: '1234' } }),
        ThemeDecorator(Theme.DARK)],
};

export const ErrorLight: Story = {
    args: {
    },
    decorators: [ProviderDecorator({
        loginForm: {
            username: '1234',
            password: '1234',
            error: 'Произошла непредвиденная ошибка',
        },
    }),
    ThemeDecorator(Theme.LIGHT)],
};

export const ErrorDark: Story = {
    args: {
    },
    decorators: [ProviderDecorator({
        loginForm: {
            username: '1234',
            password: '1234',
            error: 'Произошла непредвиденная ошибка',
        },
    }),
    ThemeDecorator(Theme.DARK)],
};

export const Loading: Story = {
    args: {
    },
    decorators: [ProviderDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
    ThemeDecorator(Theme.LIGHT)],
};
