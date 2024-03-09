import { classNames } from 'shared/lib/classNames/classNames';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import React, { Suspense, useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
export default App;
