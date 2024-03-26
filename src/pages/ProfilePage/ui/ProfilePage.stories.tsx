import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProviderDecorator } from 'shared/config/storybook/ProviderDecorator/ProviderDecorator';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.LIGHT), ProviderDecorator({})],
};
export const Dark: Story = {
    args: {
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK), ProviderDecorator({})],
};
