import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    MouseEvent, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import Portal from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?:string;
    children?:ReactNode;
    isOpen?:boolean;
    onClose?:() => void;
    lazy?:boolean;
}

const ANIMATION_DELAY = 200;

export const Modal = (props:ModalProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    const onContentClick = (e:MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};

export default Modal;
