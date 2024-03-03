import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';
import { userEvent } from '@storybook/test';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        screen.debug();
    });
    test('decrement', async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
        screen.debug();
    });
    test('increment', async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
        screen.debug();
    });
});
