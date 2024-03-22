import projectscss from "./Projects.module.css";
import { Helmet } from "react-helmet";

function Projects() {



  return (
    <>


<Helmet>
    <meta charSet="utf-8" />
    <title>Projects</title>
    <link
      rel="shortcut icon"
      href="../../assets/Profile/profileImage-modified.ico"
      type="image/x-icon"
    />
    <link rel="apple-touch-icon" href="../../assets/Profile/profileImage.png" />
  </Helmet>;



      <div className="container">
        <section className={projectscss.MainSection}>
          <h1 className={projectscss.myh1}>
            My Recent Projects <i class="fa-solid fa-code ps-2 "></i>
          </h1>
          <h4 className={projectscss.myh4}>
            <a
              className={projectscss.githubLink}
              href="https://github.com/Abdelrahmaannn"
              target="_blank"
            >
              {" "}
              GitHub Account{" "}
              <i
                class={"fa-brands fa-github ps-1 " + projectscss.githubIcon}
              ></i>{" "}
            </a>
          </h4>

          <div className="row mt-5 gy-4 ">
            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/Front-End/fresh cart.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}>
                  {" "}
                  Fresh Cart E-Commerce Store
                </h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  Fully Functional Web Application with authentication and
                  authorization control. It allows customers to create an
                  account and login. If user authenticates with the dB he can
                  place an order, choose the payment method, and view orders
                  history. Compatible with all screen sizes
                </p>

                <div className={projectscss.cardLayer}>
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://github.com/Abdelrahmaannn/Fresh-Cart-E-Commerce.git"
                      target="_blank"
                    >
                      {" "}
                      Source Code <i class="fa-solid fa-code ps-1 "></i>
                    </a>
                  </button>

                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://abdelrahmaannn.github.io/Fresh-Cart-E-Commerce/#/login"
                      target="_blank"
                    >
                      {" "}
                      Live Demo <i class="fa-brands fa-github ps-1 "></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* ******************************************************************** */}

            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/Front-End/movie box.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}> Movie Box</h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  Simple React App That show Three Categories (popular , Top
                  Rated , Tv Shows) This data Provided from Movie DB website
                  that provide a free API that i use in my project this simple
                  project was practicing on Routing an APIs in react and this is
                  my first react project
                </p>

                <div className={projectscss.cardLayer}>
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://github.com/Abdelrahmaannn/Movies-Project.git"
                      target="_blank"
                    >
                      {" "}
                      Source Code <i class="fa-solid fa-code ps-1 "></i>
                    </a>
                  </button>

                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://abdelrahmaannn.github.io/Movies-Project/"
                      target="_blank"
                    >
                      {" "}
                      Live Demo <i class="fa-brands fa-github ps-1 "></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* ******************************************************************** */}

            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard + " pb-4 mb-3"}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/Front-End/x weather.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}> X Weather</h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  A website to view weather across three days: yesterday, today,
                  and tomorrow. You can search for a specific city to view its
                  weather, and a button to reset to your location.
                </p>

                <div className={projectscss.cardLayer}>
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://github.com/Abdelrahmaannn/weather-App.git"
                      target="_blank"
                    >
                      {" "}
                      Source Code <i class="fa-solid fa-code ps-1 "></i>
                    </a>
                  </button>

                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://abdelrahmaannn.github.io/weather-App/"
                      target="_blank"
                    >
                      {" "}
                      Live Demo <i class="fa-brands fa-github ps-1 "></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* ******************************************************************** */}

            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/Front-End/note me.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}> Note Me</h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  Note me website that allows user to create, update or delete a
                  Notes. It allows the user to search for specific note too. it
                  contains signup and login system and stores the user data in
                  the local storge i create ir using native JavaScript without
                  using any frameworks{" "}
                </p>

                <div className={projectscss.cardLayer}>
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://github.com/Abdelrahmaannn/Note-me.git"
                      target="_blank"
                    >
                      {" "}
                      Source Code <i class="fa-solid fa-code ps-1 "></i>
                    </a>
                  </button>

                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://abdelrahmaannn.github.io/Note-me/"
                      target="_blank"
                    >
                      {" "}
                      Live Demo <i class="fa-brands fa-github ps-1 "></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* ******************************************************************** */}

            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/Front-End/login system.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}> Read Begin</h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  A website that allows you to signup and login to the created
                  account using the local storage to store user information,
                  Very well designed and user-friendly interface that works well
                  on all devices and excellent user experience.{" "}
                </p>

                <div className={projectscss.cardLayer}>
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://github.com/Abdelrahmaannn/Assignment11_login_system.git"
                      target="_blank"
                    >
                      {" "}
                      Source Code <i class="fa-solid fa-code ps-1 "></i>
                    </a>
                  </button>

                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://abdelrahmaannn.github.io/Assignment11_login_system/signUpPage.html"
                      target="_blank"
                    >
                      {" "}
                      Live Demo <i class="fa-brands fa-github ps-1 "></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* ******************************************************************** */}

            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/Front-End/quote generator.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}> Quotes Generator</h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  Quotes generator in the form of tweets the concept and the
                  design inspired by me.I developed it using HTML, CSS,
                  Bootstrap, and JS. 100% responsive on different screen sizes
                  and all the components in the tweet are dynamic which changes
                  with every tweet.{" "}
                </p>

                <div className={projectscss.cardLayer}>
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://github.com/Abdelrahmaannn/Quote-Generator.git"
                      target="_blank"
                    >
                      {" "}
                      Source Code <i class="fa-solid fa-code ps-1 "></i>
                    </a>
                  </button>

                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://abdelrahmaannn.github.io/Quote-Generator/"
                      target="_blank"
                    >
                      {" "}
                      Live Demo <i class="fa-brands fa-github ps-1 "></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* ******************************************************************** */}

            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/Front-End/love me.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}> Do You Love Me?</h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  It's a simple funny game that every time when clicking no
                  button the yes button get bigger and bigger until clicking yes
                  at the end
                </p>

                <div className={projectscss.cardLayer}>
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://github.com/Abdelrahmaannn/love_me.git"
                      target="_blank"
                    >
                      {" "}
                      Source Code <i class="fa-solid fa-code ps-1 "></i>
                    </a>
                  </button>

                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://abdelrahmaannn.github.io/love_me/"
                      target="_blank"
                    >
                      {" "}
                      Live Demo <i class="fa-brands fa-github ps-1 "></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* ******************************************************************** */}

            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/Front-End/bezel.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}> Bezel</h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  A dummy website for a marketing agency that show the team of
                  the agency and what the agency do and their work
                </p>

                <div className={projectscss.cardLayer}>
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://github.com/Abdelrahmaannn/Bezel-Website.git"
                      target="_blank"
                    >
                      {" "}
                      Source Code <i class="fa-solid fa-code ps-1 "></i>
                    </a>
                  </button>

                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://abdelrahmaannn.github.io/Bezel-Website/"
                      target="_blank"
                    >
                      {" "}
                      Live Demo <i class="fa-brands fa-github ps-1 "></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* ******************************************************************** */}

            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/Front-End/mealify.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}> Mealify</h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  A dummy website for a restaurant showcasing meals, chefs, and
                  a contact section. It's well-designed on all screen sizes
                </p>

                <div className={projectscss.cardLayer}>
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://github.com/Abdelrahmaannn/Mealify.git"
                      target="_blank"
                    >
                      {" "}
                      Source Code <i class="fa-solid fa-code ps-1 "></i>
                    </a>
                  </button>

                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://abdelrahmaannn.github.io/Mealify/"
                      target="_blank"
                    >
                      {" "}
                      Live Demo <i class="fa-brands fa-github ps-1 "></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={projectscss.ux}>
          <h2 className={projectscss.myh2}>
            UX And Project Management{" "}
            <i class="fa-solid fa-heart-circle-check ps-1"></i>
          </h2>

          <div className="row mt-5 gy-4">
            {/* ******************************************************************** */}

            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/UX/shogun.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}> Shogun</h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  It's case study for Shogun mobile app that provide Japanese
                  food that you can order your food from the app and you can
                  track your order the case study contains full design phases
                  from A-Z{" "}
                </p>

                <div
                  className={
                    projectscss.cardLayer +
                    " d-flex justify-content-center align-items-center "
                  }
                >
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://docs.google.com/document/d/1SanfdDur7DUzFgVBh59TWTqbKFHg8u3ghPeoF7Kf19I/edit?usp=sharing"
                      target="_blank"
                    >
                      {" "}
                      Case Study <i class="fa-solid fa-paperclip ps-1 "></i>
                    </a>
                  </button>

                  {/* <button className= { " btn " + projectscss.myBtn}><a  className={projectscss.linkforcode} href="https://abdelrahmaannn.github.io/Mealify/" target="_blank"> Live Demo <i class="fa-brands fa-github ps-1 "></i></a></button> */}
                </div>
              </div>
            </div>

            {/* ******************************************************************** */}

            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard + " pb-2 mb-2"}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/UX/redline agency.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}> Redline Agency</h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  It's case study for Redline Agency that provide digital
                  marketing services the case study contains full design phases
                  from A-Z{" "}
                </p>

                <div
                  className={
                    projectscss.cardLayer +
                    " d-flex justify-content-center align-items-center "
                  }
                >
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://docs.google.com/document/d/1nQ_7519EAAfBMOLT7tzSTzyjYuBgjJydzdeLaGacda4/edit?usp=sharing"
                      target="_blank"
                    >
                      {" "}
                      Case Study <i class="fa-solid fa-paperclip ps-1 "></i>
                    </a>
                  </button>

                  {/* <button className= { " btn " + projectscss.myBtn}><a  className={projectscss.linkforcode} href="https://abdelrahmaannn.github.io/Mealify/" target="_blank"> Live Demo <i class="fa-brands fa-github ps-1 "></i></a></button> */}
                </div>
              </div>
            </div>

            {/* ******************************************************************** */}

            <div className="col-md-4 mt-2">
              <div className={projectscss.projectCard + ""}>
                <img
                  className={"w-100 " + projectscss.projectImage}
                  src={require("../../assets/projects/UX/read begin.png")}
                  alt=""
                />
                <h3 className={projectscss.projectTitle}> Read Begin</h3>
                <p className={projectscss.projectDescription}>
                  {" "}
                  "Read Begin" it's a transformative platform that aims to
                  empower adults in their pursuit of literacy, I've created an
                  environment that Keeps the consistency and motivation{" "}
                </p>

                <div
                  className={
                    projectscss.cardLayer +
                    " d-flex justify-content-center align-items-center "
                  }
                >
                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://docs.google.com/document/d/1uV_UxpsgQNl4UKsaBV0YUn9RK8NQHc1WyjVyFd8LyDs/edit?usp=sharing"
                      target="_blank"
                    >
                      {" "}
                      Case Study <i class="fa-solid fa-paperclip ps-1 "></i>
                    </a>
                  </button>

                  <button className={" btn " + projectscss.myBtn}>
                    <a
                      className={projectscss.linkforcode}
                      href="https://docs.google.com/document/d/19kK8z-8TxJ3UeMlFUuS1a2LKZR9ZHILMrOq2vZs_h1Y/edit?usp=sharing"
                      target="_blank"
                    >
                      {" "}
                      PM Docs <i class="fa-regular fa-folder ps-1 "></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
