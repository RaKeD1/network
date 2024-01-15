import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import NightIcon from "shared/assets/icons/night.svg";
import DayIcon from "shared/assets/icons/day.svg";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? (
        <DayIcon width={"30px"} />
      ) : (
        <NightIcon width={"30px"} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
