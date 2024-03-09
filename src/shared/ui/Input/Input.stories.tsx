import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input, InputTheme } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
    },
};

export const Clear: Story = {
    args: {
        theme: InputTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const ClearInverted: Story = {
    args: {
        theme: InputTheme.CLEAR_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const LineBottom: Story = {
    args: {
        theme: InputTheme.LINE_BOTTOM,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LineBottomInvertedTheme: Story = {
    args: {
        theme: InputTheme.LINE_BOTTOM_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
