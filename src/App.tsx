import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home Admin/Home";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AnnouncementPage from "./pages/announcement/AnnouncementPage";
import "./styles/global.scss";
import ReportPage from "./pages/report/ReportPage";
import { reports } from "./data";

function App() {

  const Layout = ()=> {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/announcement",
          element:<AnnouncementPage/>
        },
        {
          path:"/report",
          element:<ReportPage reports={reports} />
        }
      ]
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/register",
      element:<Register />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
