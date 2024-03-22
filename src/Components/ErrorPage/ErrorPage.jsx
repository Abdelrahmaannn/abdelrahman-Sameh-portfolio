import { Helmet } from "react-helmet";
import errorCss from "./Error.module.css";

function Error() {
  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>404 Page Not Found</title>
        <link rel="shortcut icon" href="../../assets/Profile/profileImage-modified.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="../../assets/Profile/profileImage.png" />
      </Helmet>

      <div className="container pb-4 text-center ">

        <h4 className={errorCss.myh4}>404</h4>
        <h4>You musn't be here !!</h4>

        <div className="position-relative ">

            <img className={errorCss.heroBackGround} src={require("../../assets/Error Page/Shopaholics Dots and stars.png")} alt="background" />
            <img className={errorCss.hero} src={require("../../assets/Error Page/peeps.png")} alt="hero" />
        </div>
      </div>


    </>
  );
}

export default Error;
