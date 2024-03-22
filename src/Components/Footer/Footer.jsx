import footercss from "./Fotter.module.css";

function Footer() {
  return (
    <>
      <footer className={footercss.footer}>
        <div className="container ">

          <div className="row">

            <div className="col-md-6 inner">
              <div className="">

                <div className="row d-flex align-items-center ">
                    
                    <div className="col-md-3 ">
                        <img className={footercss.image} src={require("../../assets/Profile/profileImage.png")} alt="Avatar for abdelrahman" />
                    </div>

                    <div className="col-md-6">
                        
                        <ul className={"list-unstyled d-flex w-50 justify-content-evenly " + footercss.ul }>
                            <li> <a className= {footercss.socialLinks} href="https://www.instagram.com/abdelrahman_sameh_?igsh=azRmNnNhcWd2MDl6" target="_blank"> <i class="fa-brands fa-instagram"></i> </a></li>
                            <li> <a className= {footercss.socialLinks} href="https://www.linkedin.com/in/abdelrahman-sameh-" target="_blank">  <i class="fa-brands fa-linkedin"></i></a> </li>
                            <li>  <a className= {footercss.socialLinks} href="https://github.com/Abdelrahmaannn" target="_blank">  <i class="fa-brands fa-github"></i></a> </li>
                        </ul>

                        <h4 className={footercss.myh4}>Abdelrahman Sameh</h4>
                        <h5 className={footercss.myh5} >Creative Software Engineer</h5>

                    </div>


                </div>

{/* *********************************************************************************** */}

              </div>
            </div>

            <div className="col-md-6 inner">
              <div className="">

              <p className={footercss.footerparagrah}>Think I'd be a good fit for your <br/> team or project? Let's connect.</p>

              <button className={"btn " + footercss.emailBtn }> <a className={ footercss.emailLink } href="mailto:abdelrahmansameh2299@gmial.com"> Lets Connect </a>  <i class="fa-regular fa-handshake ps-2 "></i></button>


              </div>

            </div>
          </div>


        </div>
      </footer>
    </>
  );
}

export default Footer;
