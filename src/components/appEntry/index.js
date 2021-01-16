import React from 'react';
import {AppWrapper, AppHeader, AppTitle} from './styled';
import ConnectedTasksPage from "../../containers/ConnectedTasksPage";


const AppEntry = () => (
    <AppWrapper>
        <AppHeader>
            <AppTitle>Task items</AppTitle>
        </AppHeader>

        <ConnectedTasksPage />

    </AppWrapper>
);

export default AppEntry;