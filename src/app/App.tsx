import { classNames } from 'shared/lib/classNames/classNames';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import React, { Suspense, useEffect, useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { ErrorBoundary } from 'shared/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            {/* Todo Убрать отсюда ErrorBoundary */}
            <ErrorBoundary itemError={<PageError />}>
                <Suspense fallback="">
                    <Navbar />
                    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                    <div className="content-page">
                        <SideBar />
                        <AppRouter />
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}
export default App;
