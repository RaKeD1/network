import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import { t } from 'i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onToggleModal}>
                    {t('Войти')}
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal} />
        </div>
    );
};

export default Navbar;
