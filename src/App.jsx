import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/ui/Navbar";
import HomePage from "./Pages/HomePage";
import Contactus from "./Pages/Contactus";
// import Layout from "./Layout";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path:"/contact",
          element:<Contactus/>
        }
      ],
    },
  ]);
  return <>
  <RouterProvider router={routes}/>
  </>;
}

export default App;
