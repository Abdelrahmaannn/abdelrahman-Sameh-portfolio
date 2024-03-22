import { Helmet } from "react-helmet";
import homecss from "./Home.module.css";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link
          rel="shortcut icon"
          href="../../assets/Profile/profileImage-modified.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="../../assets/Profile/profileImage.png"
        />
      </Helmet>

      <div className="container">
        <section className={homecss.heroSection}>
          <h1 className={homecss.myh1}>
            Creative <br /> Software <br /> Developer/Designer
          </h1>
          <div
            className={
              "d-flex justify-content-between mx-auto pb-5  " + homecss.subKalam
            }
          >
            <h5 className={homecss.myh5}>
              Reach The{" "}
              <span className={homecss.importantWord}>Unreachable</span>
            </h5>
            <h5 className={homecss.myh5}>2023-present</h5>
          </div>

          <img
            className={homecss.heroimage}
            src={require("../../assets/Profile/IMG_1678449011705.jpg")}
            alt=""
          />
        </section>

        <section className={homecss.companies}>
          <h2 className={homecss.myh2}>Trusted By</h2>

          <div className="d-flex flex-wrap justify-content-center  pt-2">
            <div className={homecss.companyimage}>
              <img
                className={homecss.myimg}
                src={require("../../assets/Companies/meta.png")}
                alt="meta logo"
              />
            </div>
            <div className={homecss.companyimage}>
              <img
                className={homecss.myimg}
                src={require("../../assets/Companies/googlejpg.png")}
                alt="google logo"
              />
            </div>
            <div className={homecss.companyimage}>
              <img
                className={homecss.myimg}
                src={require("../../assets/Companies/Coursera.png")}
                alt="Coursera logo"
              />
            </div>
            <div className={homecss.companyimage}>
              <img
                className={homecss.myimg}
                src={require("../../assets/Companies/RouteAcedemypng.png")}
                alt="RouteAcedemy logo"
              />
            </div>
            <div className={homecss.companyimage}>
              <img
                className={homecss.myimg}
                src={require("../../assets/Companies/hong-kong 1.png")}
                alt="hong-kong logo"
              />
            </div>
          </div>
        </section>

        <section className={homecss.aboutMe}>
          <h2 className={homecss.myh2}>About Me</h2>

          <p className={homecss.myInfo}>
            👋 Hello Welcome to my Portfolio, I'm Abdelrahman Sameh, a
            passionate third-year student pursuing a Computer Science and
            Artificial Intelligence degree at Cairo University.
          </p>

          <p className={homecss.myInfo}>
            I'm a Front End (React.js) Developer, and I specialize in crafting
            engaging and interactive user experiences on the web. using all
            front-end technologies , my goal is delivering visual appealing and
            responsive websites ✨🚀
          </p>

          <p className={homecss.myInfo}>
            I have a strong foundation in UX design and Project Management,
            thanks to Specialization certificates from Google, I use my skills
            to create user-centric solutions and efficiently manage projects to
            deliver results.💡
          </p>

          <p className={homecss.myInfo}>
            Currently, I'm diving deep into Back-End Development exploring The
            Node.js track. This journey allows me to fuse creativity with
            functionality, turning innovative ideas into fully functional web
            applications. 🧠
          </p>
        </section>

        <section className={homecss.technologies}>
          <h2 className={homecss.myh2}>Technologies</h2>

          <div className="d-flex flex-wrap ">
            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className="w-75 ms-md-4 mt-md-3 "
                  src={require("../../assets/Skills/Skills/html-5-logo-svgrepo-com.e248da514edac2a2a66bde8fa0166701.png")}
                  alt=""
                />
              </div>
            </div>

            {/* **** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className="w-75 ms-md-4 mt-md-3 "
                  src={require("../../assets/Skills/Skills/css3-logo-svgrepo-com.760a170789bfa4b7e23fd5ae5d0a7415.png")}
                  alt=""
                />
              </div>
            </div>

            {/* ********* */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className="w-50 ms-md-5 mt-md-5 "
                  src={require("../../assets/Skills/Skills/Vector.png")}
                  alt=""
                />
              </div>
            </div>

            {/* ********** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Skills/bootstrap-4-logo-svgrepo-com.98585727bcfe0b1555649ec9bbab236c.png")}
                  alt=""
                />
              </div>
            </div>

            {/* ****** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Skills/Vector-1.png")}
                  alt=""
                />
              </div>
            </div>

            {/* ****** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Skills/javascript-svgrepo-com.0866c81b3b841c647e23b8a5d991c312.png")}
                  alt=""
                />
              </div>
            </div>

            {/* ****** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Skills/Group 1.png")}
                  alt=""
                />
              </div>
            </div>

            {/* ****** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Skills/Group 2.png")}
                  alt=""
                />
              </div>
            </div>

            {/* ****** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Skills/typescript-logo-svgrepo-com.250981d1e26a632d08ab7cf18b210da3.png")}
                  alt=""
                />
              </div>
            </div>

            {/* ****** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Skills/npm-svgrepo-com.6382f0d2f478902a0c833577ae39e927.png")}
                  alt=""
                />
              </div>
            </div>

            {/* ****** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Skills/next-js-logo 1.png")}
                  alt=""
                />
              </div>
            </div>

            {/* ****** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Skills/Group 3.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className={homecss.softWare}>
          <h2 className={homecss.myh2}>Software Programs</h2>

          <div className="d-flex justify-content-center  flex-wrap ">
            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Softwares/adobe-xd-2.png")}
                  alt=""
                />
              </div>
            </div>

            {/* /****************************** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Softwares/figma-svgrepo-com.eea90cbdb2df47f3f9a77474d7dd244c.png")}
                  alt=""
                />
              </div>
            </div>

            {/* /****************************** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Softwares/miro.png")}
                  alt=""
                />
              </div>
            </div>

            {/* /****************************** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Softwares/Vector.png")}
                  alt=""
                />
              </div>
            </div>

            {/* /****************************** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Softwares/power point.png")}
                  alt=""
                />
              </div>
            </div>

            {/* /****************************** */}

            <div className={homecss.inner}>
              <div className={homecss.blackCircle}>
                <img
                  className={homecss.bootstrab}
                  src={require("../../assets/Skills/Softwares/word.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
