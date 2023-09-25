import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../pages/DonationDetails/DonationDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/donation',
                element: <Donation />,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/donation/details/:id',
                element: <DonationDetails />,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/statistics',
                element: <Statistics />
            }
        ]
    },
]);

export default router;