import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

export enum InputTheme {
    // eslint-disable-next-line no-unused-vars
    CLEAR = 'clear',
    // eslint-disable-next-line no-unused-vars
    CLEAR_INVERTED = 'clearInverted',
    // eslint-disable-next-line no-unused-vars
    OUTLINE = 'outline',
    // eslint-disable-next-line no-unused-vars
    LINE_BOTTOM = 'lineBottom',
    // eslint-disable-next-line no-unused-vars
    LINE_BOTTOM_INVERTED = 'lineBottomInverted'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    theme?: InputTheme;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props:InputProps) => {
    const {
        className,
        theme = InputTheme.OUTLINE,
        value,
        onChange,
        autoFocus,
        type = 'text',
        ...otherProps
    } = props;

    const mods:Mods = {
        [cls[theme]]: true,
    };
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            ref={ref}
            type={type}
            value={value}
            className={classNames(
                cls.Input,
                mods,
                [className],
            )}
            onChange={onChangeHandler}
            {...otherProps}
        />

    );
});

export default Input;
