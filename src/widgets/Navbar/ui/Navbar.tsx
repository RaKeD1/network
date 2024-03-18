import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const { t } = useTranslation();

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onLogout}>
                        {t('Выйти')}
                    </Button>
                </div>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>

                <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onShowModal}>
                    {t('Войти')}
                </Button>
            </div>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};

export default Navbar;
