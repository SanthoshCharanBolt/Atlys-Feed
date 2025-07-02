import { Fragment, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { AppRouter } from './app.router';

export default function Router() {
    return (
        <Suspense fallback={<Fragment />}>
            <RouterProvider router={AppRouter} />
        </Suspense>
    );
}
