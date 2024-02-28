import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';
import SideBar from './SideBar';

describe('SideBar', () => {
    test('Test render', () => {
        ComponentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });
    // TODO: Доделать тесты (сделать проверку перехода по ссылкам)
    test('Test toggle', () => {
        ComponentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});
