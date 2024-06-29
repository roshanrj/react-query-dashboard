import React, { useState } from 'react';
import AppNavbar from './components/appNavbar';
import AppSidebar from './components/appSidebar';
import AppContent from './components/appContent';

const DefaultLayout = () => {
    const [displaySidebar, setDisplaySidebar] = useState<boolean>(true);
    return (
        <div>
            <AppNavbar {...{ setDisplaySidebar }} />
            <AppSidebar {...{ displaySidebar, setDisplaySidebar }} />
            <AppContent {...{ setDisplaySidebar }}/>
        </div>
    );
};

export default DefaultLayout;
