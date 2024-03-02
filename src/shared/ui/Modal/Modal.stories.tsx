import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        children: 'Text Text Text Text Text Text Text Text Text Text Text '
            + 'Text Text Text Text Text Text Text Text Text Text Text ',
        isOpen: true,
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const LightTheme: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const DarkTheme: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
