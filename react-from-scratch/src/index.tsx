import './index.css';
import ErrorPage from './error-page';
import Root from './routes/root';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Contact from './routes/contact';



const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw new Error('Can\'t find root container');

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: "contacts/:contactId",
        element: <Contact />,
    },
]);


const root = createRoot(rootContainer);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)