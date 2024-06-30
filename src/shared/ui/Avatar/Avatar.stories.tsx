import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Avatar from './Avatar';
import AvatarImg from './avatar.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 150,
        alt: 'default alt',
        src: AvatarImg,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Small: Story = {
    args: {
        size: 50,
        alt: 'default alt',
        src: AvatarImg,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
