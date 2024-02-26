import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
    args: {
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {
    args: {
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
