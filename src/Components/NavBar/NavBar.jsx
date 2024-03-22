
import { Link, useLocation } from "react-router-dom";
import navbarcss from "./NavBar.module.css"

function NavBar() {

  // detecting the user location to make the active link
  const{pathname} = useLocation()

    return ( <>


<nav class="navbar navbar-expand-lg mt-2 ">
  <div class="container d-flex justify-content-center ">
    <a class={"navbar-brand " + navbarcss.logobrand } href="#">Abdelrahman</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={"/home"} class={"nav-link " + navbarcss.navbarItem} > {pathname == "/home" ? <span className={navbarcss.ActiveLInk}>Home</span> : "Home"} </Link>
        </li>
        <li class="nav-item">
          <Link to={"/projects"} class={"nav-link " + navbarcss.navbarItem} >{pathname == "/projects" ? <span className={navbarcss.ActiveLInk}>Projects</span> : "Projects"}</Link>
        </li>
        <li class="nav-item">
          <Link to={"/certificates"} class={"nav-link " + navbarcss.navbarItem} >{pathname == "/certificates" ? <span className={navbarcss.ActiveLInk}>Certificates</span> : "Certificates"}</Link>
        </li>
      </ul>

      <a href="../../assets/Abdelrahman Sameh Resume.pdf" download={"My-Resume"}>
      <button className={"btn me-3 " + navbarcss.resumeBtn }>Resume  <i class="fa-solid fa-download ps-2 "></i></button>
      </a>
      <button className={"btn " + navbarcss.emailBtn }> <a className={ navbarcss.emailLink } href="mailto:abdelrahmansameh2299@gmial.com"> Lets Connect </a>  <i class="fa-regular fa-handshake ps-2 "></i></button>
    </div>
  </div>
</nav>
    
    
    
    
    
    
    
    </> );
}

export default NavBar;
