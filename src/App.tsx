import "./css/App.min.css";

function App() {
  const mobilCreatonImages: string[] = [
    "image-deep-earth.jpg",
    "image-night-arcade.jpg",
    "image-soccer-team.jpg",
    "image-grid.jpg",
    "image-from-above.jpg",
    "image-pocket-borealis.jpg",
    "image-curiosity.jpg",
    "image-fisheye.jpg",
  ];

  const mobilCreatonText: mobilCreatonTextFormat[] = [
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

  type mobilCreatonTextFormat = {
    first: string;
    second: string;
  };

  return (
    <>
      <header className="py-5">
        <div className="contain-width">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="logo">loopstudios</h4>
            <img
              className="d-block d-lg-none"
              src="../images/icon-hamburger.svg"
              alt="hambuger menu"
            />

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
          <h2 className="hero-section">immersive experiences that deliver</h2>
        </div>
      </header>

      <main className="contain-width new-section d-flex flex-column">
        {/* Interactive VR */}
        <div className="interactive-vr row">
          <div className="col-lg-8 col-12 interactive-vr__img">
            <img
              src="../images/mobile/image-interactive.jpg"
              alt="Person interactive in vr"
              ps-5
            />
          </div>
          <div className="mx-2 text-center text-lg-start interactive-vr__info">
            <h3 className="mt-5 mb-4 m-lg-0">The leader in interactive VR</h3>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>

        {/* Our creations */}
        <div className="our-creation mt-5">

          <div className="mb-5 d-flex justify-content-lg-between justify-content-center align-items-center">
            <h3 className="text-center ">Our creations</h3>
            <button className="d-none d-lg-block m-0">See all</button>
          </div>

          <div className="row g-4">
            {mobilCreatonImages.map((img, index) => (
              <div className="col-16 col-lg-3">
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
                    {mobilCreatonText[index].first} <br />
                    {mobilCreatonText[index].second}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center d-lg-none">
            <button>See all</button>
          </div>
        </div>
      </main>

      <footer className="text-center text-lg-start py-5">
        <div className="contain-width d-flex flex-column flex-lg-row gap-3 justify-content-between">
          <div className="d-flex flex-column gap-4">
            <h4 className="logo">loopstudios</h4>

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
