import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const InvertedPrimary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.INVERTED_PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const InvertedPrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.INVERTED_PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
