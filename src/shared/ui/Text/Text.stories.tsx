import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Заголовок',
        text: 'Текст который будет написан',
    },
    decorators: ThemeDecorator(Theme.LIGHT),
};

export const PrimaryDark: Story = {
    args: {
        title: 'Заголовок',
        text: 'Текст который будет написан',
    },
    decorators: ThemeDecorator(Theme.DARK),
};

export const OnlyTitle: Story = {
    args: {
        title: 'Заголовок',
    },
    decorators: ThemeDecorator(Theme.LIGHT),
};
export const OnlyTitleDark: Story = {
    args: {
        title: 'Заголовок',
    },
    decorators: ThemeDecorator(Theme.DARK),
};
export const OnlyText: Story = {
    args: {
        text: 'Текст который будет написан',
    },
    decorators: ThemeDecorator(Theme.LIGHT),
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Текст который будет написан',
    },
    decorators: ThemeDecorator(Theme.DARK),
};

export const Error: Story = {
    args: {
        title: 'Ошибка:',
        text: 'Текст который будет написан',
        theme: TextTheme.ERROR,
    },
    decorators: ThemeDecorator(Theme.LIGHT),
};

export const ErrorDark: Story = {
    args: {
        title: 'Ошибка:',
        text: 'Текст который будет написан',
        theme: TextTheme.ERROR,
    },
    decorators: ThemeDecorator(Theme.DARK),
};
