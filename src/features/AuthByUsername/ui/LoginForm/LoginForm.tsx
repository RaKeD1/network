import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?:string;
}

export const LoginForm = ({ className }:LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div>{t('Авторизация')}</div>
            <Input
                autoFocus
                type="text"
                className={cls.input}
                placeholder={t('Введите имя пользователя')}
            />
            <Input
                type="password"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button>
                {t('Войти')}
            </Button>
        </div>
    );
};