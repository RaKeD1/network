import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Decorator } from '@storybook/react';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => {
    document.documentElement.dataset.theme = theme;

    return (
        <ThemeProvider initialTheme={theme}>
            <div
                className={`app ${theme}`}
                style={{
                    minHeight: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Story />
            </div>
        </ThemeProvider>
    );
};
