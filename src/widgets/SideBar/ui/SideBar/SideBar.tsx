import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import React, { useState } from "react";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}> toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/*//Переключатель языков*/}
      </div>
    </div>
  );
};

export default SideBar;
