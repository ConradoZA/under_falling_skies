import 'tailwindcss/tailwind.css';
import Dev from 'routes/Dev';
import ErrorPage from 'routes/ErrorPage';
import Home from 'routes/Home';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (
//   localStorage.theme === 'dark' ||
//   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
// ) {
//   document.documentElement.classList.add('dark');
// } else {
//   document.documentElement.classList.remove('dark');
// }

// // Whenever the user explicitly chooses light mode
// localStorage.theme = 'light';

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark';

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '/dev',
    element: <Dev />,
  },
]);

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
