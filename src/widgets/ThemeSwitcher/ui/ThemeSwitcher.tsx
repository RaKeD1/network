import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import NightIcon from 'shared/assets/icons/night.svg';
import DayIcon from 'shared/assets/icons/day.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? (
                <DayIcon width="30px" />
            ) : (
                <NightIcon width="30px" />
            )}
        </Button>
    );
});

export default ThemeSwitcher;
