import Loading from 'components/loading';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
const UseQueryComponent = React.lazy(() => import('../../containers/useQuery-implementation'));
const UseInfiniteComponent = React.lazy(() => import('../../containers/useInfinite-implementation'));

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    & > div {
        display: flex;
        flex-direction: column;
        width: 90%;
    }
`;

const AppContent = ({ setDisplaySidebar}: { setDisplaySidebar: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
    <Content onClick={() => setDisplaySidebar(false)} role='button'>
        <Suspense fallback={<div className="children-line-loader"><Loading /></div>}>
            <Routes>
                <Route key='use-query' path='/' element={<UseQueryComponent />} />
                <Route key='use-query-implementation' path='/use-query' element={<UseQueryComponent />} />
                <Route key='use-infinite-query-implementation' path='/use-infinite-query' element={<UseInfiniteComponent />} />
            </Routes>
        </Suspense>
    </Content>
    )
};

export default AppContent;