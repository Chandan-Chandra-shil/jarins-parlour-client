import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import OurPortfolio from "../pages/OurPortfolio/OurPortfolio";
import OurTeam from "../pages/OurTeam/OurTeam";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/our-portfolio',
        element:<OurPortfolio></OurPortfolio>
      },
      {
        path: '/our-team',
        element:<OurTeam></OurTeam>
      },
      {
        path: 'contact-us',
        element:<ContactUs></ContactUs>
      }
    ]
    
  }

])

export default router;