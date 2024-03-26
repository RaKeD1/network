import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps{
    className?:string;
}

export const NotFoundPage = memo(({ className }:NotFoundPageProps) => {
    const { t } = useTranslation('notfound');
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
});

export default NotFoundPage;
