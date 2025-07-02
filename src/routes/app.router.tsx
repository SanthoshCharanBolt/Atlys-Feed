import { Navigate, Route, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';

import FeedPage from '@/pages/feed.page';

import '@/assets/styles/global.css';

export const AppRouter = createBrowserRouter(
    createRoutesFromChildren(
        <>
            <Route path="/" Component={FeedPage} />
            <Route path={'*'} element={<Navigate to={'/'} replace={true} />} />
        </>,
    ),
);
