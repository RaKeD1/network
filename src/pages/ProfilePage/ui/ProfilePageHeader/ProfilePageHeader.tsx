import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps{
    className?:string;
}

export const ProfilePageHeader = ({ className }:ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.canselEdit());
    }, [dispatch]);

    const onSaveData = useCallback(() => {
        dispatch(updateProfileData());
        dispatch(profileActions.canselEdit());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly
                ? (
                    <Button
                        onClick={onEdit}
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <div className={cls.buttons}>
                        <Button
                            onClick={onSaveData}
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Сохранить')}
                        </Button>
                        <Button
                            onClick={onCancelEdit}
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                        >
                            {t('Отменить')}
                        </Button>
                    </div>
                )}
        </div>
    );
};

export default ProfilePageHeader;
