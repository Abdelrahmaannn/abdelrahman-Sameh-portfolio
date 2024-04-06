import CertificatesCss from "./Certificates.module.css";
import { Helmet } from 'react-helmet';

function Certificates() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Certificates</title>

        <link rel="shortcut icon" href="../../assets/Profile/profileImage-modified.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="../../assets/Profile/profileImage.png"
        />
      </Helmet>

      <div className="container mt-5 pb-5 ">

        <h1 className={CertificatesCss.myh1}>My Certificates  <i class="fa-solid fa-trophy ps-2 "></i> </h1>

        <h4  className={CertificatesCss.myh4}><a className={CertificatesCss.credlyLink} href="https://www.credly.com/users/abdelrahman-sameh.f84fa34e" target="_blank" >  Go To Credly <i class={"fa-solid fa-circle-arrow-right ps-1 " + CertificatesCss.Icon }></i>  </a></h4>

        <div className="row gy-md-2 pb-5 mt-5">

        <div className="col-md-4 mt-1 py-md-3 ">
                <div>
                <img className="w-100" src={require("../../assets/Cirtificates/Route-Front-End.png")} alt="Front-end diploma cirtificate" />
                <h5 className={CertificatesCss.myh5}> <a className={CertificatesCss.certificateLink} target="_blank" href="https://drive.google.com/file/d/18YssG6XNcJvu8WrxAF2FtoQtDoIv1g16/view?usp=sharing"> Go To Certificate <i class={"fa-solid fa-circle-arrow-right ps-1 " + CertificatesCss.Icon }></i> </a></h5>

                </div>

            </div>

            <div className="col-md-4 mt-1 py-md-3  ">
                <div>
                <img className="w-100" src={require("../../assets/Cirtificates/ux google cirtificate.png")} alt="ux google cirtificate" />
                <h5 className={CertificatesCss.myh5}> <a className={CertificatesCss.certificateLink} target="_blank" href="https://coursera.org/share/205b2e1504911da7e0e42ec127c298f2"> Go To Certificate <i class={"fa-solid fa-circle-arrow-right ps-1 " + CertificatesCss.Icon }></i> </a></h5>
                </div>

            </div>

            <div className="col-md-4  mt-1 py-md-3 ">
                <div>
                <img  className="w-100" src={require("../../assets/Cirtificates/Pm google cirtificate.png")} alt="Pm google cirtificate" />
                <h5 className={CertificatesCss.myh5}> <a className={CertificatesCss.certificateLink} target="_blank" href="https://coursera.org/share/643acf5b11032176ebc406fbc290c9b9"> Go To Certificate <i class={"fa-solid fa-circle-arrow-right ps-1 " + CertificatesCss.Icon }></i> </a></h5>
                
                </div>

            </div>

            <div className="col-md-4  mt-1 py-md-3 ">
                <div>
                <img   className="w-100" src={require("../../assets/Cirtificates/Database Meta Certificate.png")} alt="Database Meta Certificate" />
                <h5 className={CertificatesCss.myh5}> <a className={CertificatesCss.certificateLink} target="_blank" href="https://coursera.org/share/9c69349c048f8444bae46dc39042e61e"> Go To Certificate <i class={"fa-solid fa-circle-arrow-right ps-1 " + CertificatesCss.Icon }></i> </a></h5>
                </div>

            </div>

            <div className="col-md-4  mt-1 py-md-3 ">
                <div>
                <img   className="w-100" src={require("../../assets/Cirtificates/honkong ciriticate.png")} alt="honkong ciriticate" />
                <h5 className={CertificatesCss.myh5}> <a className={CertificatesCss.certificateLink} target="_blank" href="https://coursera.org/share/a156c40c09c54c551a050cb16b54c537"> Go To Certificate <i class={"fa-solid fa-circle-arrow-right ps-1 " + CertificatesCss.Icon }></i> </a></h5>
                </div>

            </div>

            <div className="col-md-4  mt-1 py-md-3 ">
                <div>
                <img  className="w-100" src={require("../../assets/Cirtificates/meta marketing.png")} alt="meta marketing ciriticate" />
                <h5 className={CertificatesCss.myh5}> <a className={CertificatesCss.certificateLink} target="_blank" href="https://coursera.org/share/bd25a9d1f98c0fb01abfeb068087195f"> Go To Certificate <i class={"fa-solid fa-circle-arrow-right ps-1 " + CertificatesCss.Icon }></i> </a></h5>
                </div>
            </div>

            <div className="col-md-4  mt-1 py-md-3 ">
                <div>
                <img   className="w-100" src={require("../../assets/Cirtificates/NXL.png")} alt="meta marketing ciriticate" />
                </div>
            </div>

            



        </div>


      </div>
    </>
  );
}

export default Certificates;
