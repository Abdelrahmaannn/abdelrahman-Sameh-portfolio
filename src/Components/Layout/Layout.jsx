import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import layoutCss from "./Layout.module.css"
import { Offline, Online } from "react-detect-offline";
import { Helmet } from 'react-helmet';


function Layout() {
    return ( 
        <>
        
        <Helmet>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="../../assets/Profile/profileImage-modified.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="../../assets/Profile/profileImage.png" />
      </Helmet>
        
        <NavBar/>

        <Outlet/>

        <Footer/>  

        <Offline><div className={layoutCss.detectOffline}> <i class="fa-solid fa-wifi pe-2 "></i> You Are Offline Please Check Your Internet Connection  </div></Offline>      
        
        
        
        </>
     );
}

export default Layout;