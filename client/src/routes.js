import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Error from './Common/Error.jsx';
import Contact from './Common/Contact.jsx';

import About from './Common/About.jsx';
import Signup from './Common/Signup.jsx';
import RegisterPage from './Common/RegisterPage.jsx';
import Leadership from './Common/Leadership.jsx';
import Profilepage from './Common/Profilepage.jsx';

import IdeasMainPage from './components/Ideas/IdeasMainPage.jsx';
import PostIdea from './components/Ideas/PostIdea.jsx';
import IdeaDescription from './components/Ideas/IdeaDescription.jsx';



import DashBoard from './components/Funding/DashBoard.jsx';
import FounderForm from './components/Funding/FounderForm.jsx';
import InvestmentPage from './components/Funding/InvestmentPage.jsx';


import Postproject from './components/Collaboration/Postproject.jsx';
import DashBoardProjects from './components/Collaboration/DashBoardProjects.jsx';
import DescriptionProject from './components/Collaboration/DescriptionProject.jsx';

import JobsPage from './components/Jobs/JobsPage.jsx';
import JobDescription from './components/Jobs/JobDescription.jsx';

import { AppLayout } from './App.jsx';

export const appRouter = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/pitchideas",
          element: <IdeasMainPage />,
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/funding',
          element: <DashBoard />
        },
        {
          path: '/signin',
          element: <Signup />
        },
        {
          path: '/register',
          element: <RegisterPage />
        },
        {
          path: '/funding/register',
          element: <FounderForm />
        },
        {
          path: '/jobs',
          element: <JobsPage />
        },
        {
          path: '/collaboration',
          element: <DashBoardProjects />
        },
        {
          path: '/collaboration/postidea',
          element: <Postproject />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/leadership',
          element: <Leadership />
        },
        {
          path: '/ideas/postidea',
          element: <PostIdea />
        },
        {
          path: '/funding/company',
          element: <InvestmentPage />
        },
        {
          path: '/collaboration/projects/:id',
          element: <DescriptionProject />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ],
    },
    {
      path: '/profile',
      element: <Profilepage />,
      errorElement: <Error />
    },
    {
      path: '/pitchideas/idea/:id',
      element: <IdeaDescription />,
      errorElement: <Error />
    },
    {
      path: '/jobs/job/:id',
      element: <JobDescription />,
      errorElement: <Error />
    },
  
  ]);