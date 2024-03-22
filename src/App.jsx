
import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Certificates from "./Components/Certificates/Certificates";
import Error from "./Components/ErrorPage/ErrorPage";
import { Helmet } from "react-helmet";

function App() {
  const myRouter = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "projects", element: <Projects /> },
        { path: "certificates", element: <Certificates /> },
        { path: "*" , element: <Error/>}
      ],
    },
  ]);

  return (
    <>
        <Helmet>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="../../assets/Profile/profileImage-modified.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="../../assets/Profile/profileImage.png" />
      </Helmet>

      <RouterProvider router={myRouter}></RouterProvider>


    </>
  );
}

export default App;
