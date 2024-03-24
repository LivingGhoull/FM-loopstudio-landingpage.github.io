import { useEffect } from "react";
import "./css/App.min.css";

function App() {
  useEffect(() => {
    const menu = document.getElementById("hamburger-icon") as HTMLImageElement;
    const menuToggle = document.getElementById("menu-toggle");
    const dropdown = document.getElementById(
      "mobil-dropdown"
    ) as HTMLBodyElement;

    const handleClick = () => {
      try {
        menu?.classList.toggle("open");
        if (!menu) {
          throw new Error("mobil menu could not be found!");
        }
        if (!dropdown) {
          throw new Error("dropdown could not be found!");
        }

        if (menu.classList.contains("open")) {
          menu.src = "../images/icon-close.svg";
        } else {
          menu.src = "../images/icon-hamburger.svg";
        }
        dropdown.classList.toggle("d-none");
      } catch (error) {
        console.error(error);
      }
    };

    menuToggle?.addEventListener("click", handleClick);

    return () => {
      menuToggle?.removeEventListener("click", handleClick);
    };
  }, []);

  const creationsImages: string[] = [
    "image-deep-earth.jpg",
    "image-night-arcade.jpg",
    "image-soccer-team.jpg",
    "image-grid.jpg",
    "image-from-above.jpg",
    "image-pocket-borealis.jpg",
    "image-curiosity.jpg",
    "image-fisheye.jpg",
  ];

  const creationsText: creationsTextFormat[] = [
    {
      first: "deep",
      second: "earth",
    },
    {
      first: "night",
      second: "arcade",
    },
    {
      first: "soccer",
      second: "team vr",
    },
    {
      first: "the",
      second: "grid",
    },
    {
      first: "from up",
      second: "aboe vr",
    },
    {
      first: "pocket",
      second: "borealis",
    },
    {
      first: "the",
      second: "curiosity",
    },
    {
      first: "make it",
      second: "fisheye",
    },
  ];

  type creationsTextFormat = {
    first: string;
    second: string;
  };

  return (
    <>
      <header className="py-5">
        <div className="contain-width">
          <div className="d-flex justify-content-between align-items-center navigation">
            <h4 className="logo">loopstudios</h4>
            <button
              id="menu-toggle"
              className="hamburger-menu"
              aria-controls="mobil-dropdown"
              aria-expanded="false"
            >
              <img
                id="hamburger-icon"
                className="d-block d-lg-none"
                src="../images/icon-hamburger.svg"
                alt="hambuger menu"
              />
            </button>
            <nav className="d-none d-lg-block">
              <ul className="d-flex gap-4">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </nav>
          </div>

          <div id="mobil-dropdown" className="d-none d-lg-none">
            <nav className="contain-width">
              <ul className="d-flex flex-column gap-4">
                <li>
                  <a href="#">
                    <h5>About</h5>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h5>Careers</h5>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h5>Events</h5>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h5>Products</h5>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h5>Support</h5>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 className="hero-section">immersive experiences that deliver</h2>
        </div>
      </header>

      <main className="contain-width new-section d-flex flex-column">
        {/* Interactive VR */}
        <section className="interactive-vr row">
          <div className="col-lg-8 col-12 interactive-vr__img">
            <img
              src="../images/mobile/image-interactive.jpg"
              alt="Person interactive in vr"
            />
          </div>
          <div className="text-center text-lg-start interactive-vr__info">
            <h3 className="mt-5 mb-4 m-lg-0">The leader in interactive VR</h3>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>

        {/* Our creations */}
        <section className="our-creation mt-5">
          <div className="mb-5 d-flex justify-content-lg-between justify-content-center align-items-center">
            <h3 className="text-center ">Our creations</h3>
            <button className="d-none d-lg-block m-0">See all</button>
          </div>

          <div className="row g-4">
            {creationsImages.map((img, index) => (
              <div key={index} className="col-16 col-lg-3">
                <div className="our-creation__secound">
                  <img
                    className="d-block d-lg-none"
                    src={`../images/mobile/${img}`}
                    alt={`${img}`}
                  />
                  <img
                    className="d-lg-block d-none"
                    src={`../images/desktop/${img}`}
                    alt={`${img}`}
                  />
                  <h4>
                    {creationsText[index].first} <br />
                    {creationsText[index].second}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center d-lg-none">
            <button>See all</button>
          </div>
        </section>
      </main>

      <footer className="text-center text-lg-start py-5">
        <div className="contain-width d-flex flex-column flex-lg-row gap-3 justify-content-between">
          <div className="d-flex flex-column gap-4">
            <h4 className="logo pb-3">loopstudios</h4>

            <nav>
              <ul className="d-flex flex-column gap-4 flex-lg-row">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="d-flex flex-column gap-4">
            <div className="d-flex justify-content-center gap-3 justify-content-lg-end">
              <a className="social-links" href="#">
                <img
                  src="../images/icon-facebook.svg"
                  alt="Link to loopstuios Facebook page"
                />
              </a>
              <a className="social-links" href="#">
                <img
                  src="../images/icon-twitter.svg"
                  alt="Link to loopstuios Twitter page"
                />
              </a>
              <a className="social-links" href="#">
                <img
                  src="../images/icon-pinterest.svg"
                  alt="Link to loopstuios Pinterest page"
                />
              </a>
              <a className="social-links" href="#">
                <img
                  src="../images/icon-instagram.svg"
                  alt="Link to loopstuios instergram page"
                />
              </a>
            </div>
            <p>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
