import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/items';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps{
    item:SidebarItemType,
    collapsed: boolean
}

export const SideBarItem = memo(({ item, collapsed }:SideBarItemProps) => {
    const { text, path, Icon } = item;
    const { t } = useTranslation();
    return (
        <AppLink
            to={path}
            theme={AppLinkTheme.INVERTED_PRIMARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>
                {t(text)}
            </span>
        </AppLink>
    );
});
export default SideBarItem;
