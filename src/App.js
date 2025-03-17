import "./App.scss";
import { ReactComponent as LogoSvg } from "./assets/icons/logo.svg";
import { ReactComponent as CartSvg } from "./assets/icons/cart.svg";
import { ReactComponent as MenuSvg } from "./assets/icons/menu.svg";
import { ReactComponent as EarthSvg } from "./assets/icons/earth.svg";
import { ReactComponent as RocketSvg } from "./assets/icons/rocket.svg";
import { useState } from "react";
import cn from "classnames";
import useClickAway from "./hooks/useClickAway";
import { Button } from "./components/Button";
import bg1 from "./assets/bg-1.png";
import bg2 from "./assets/bg-2.png";
import bg3 from "./assets/bg-3.png";
import bg4 from "./assets/bg-4.png";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);

  const ref = useClickAway(() => {
    setMenuOpened(false);
  });
  const handleMenuIconClick = () => {
    setMenuOpened((value) => !value);
  };
  return (
    <div className="app">
      <nav>
        <a href="/">
          <LogoSvg />
        </a>

        <div ref={ref}>
          <MenuSvg className="menu-icon" onClick={handleMenuIconClick} />
          <div className={cn("menu", { menu__opened: menuOpened })}>
            <a href="/" className="menu__item">
              Home
            </a>
            <a href="/" className="menu__item">
              Products
            </a>
            <a href="/" className="menu__item">
              <CartSvg />
            </a>
          </div>
        </div>
      </nav>

      <header className="header">
        <EarthSvg className="header__earth" />

        <div className="header__text">
          <h1>
            Discover the vast
            <br />
            expanses of <span>space</span>
          </h1>

          <h4>
            Where the possibilities are <span>endless!</span>
          </h4>

          <div>
            <Button>Learn more</Button>
          </div>
        </div>
      </header>

      <div className="offers">
        <h3 className="h3">Offers</h3>

        <div className="offers__list">
          <div className="offers__item offer" style={{ "--bg": `url(${bg1})` }}>
            <h3 className="offer__title">
              Move the borders
              <br />
              of reality!
            </h3>
            <p className="offer__text">Go on a space adventure</p>
            <Button type="outline">Learn more</Button>
          </div>
          <div className="offers__item offer" style={{ "--bg": `url(${bg2})` }}>
            <h3 className="offer__title">
              Space is not
              <br /> just stars and
              <br /> planets
            </h3>
            <p className="offer__text">it is a majestic journey to </p>
            <Button type="outline">Learn more</Button>
          </div>
          <div className="offers__item offer" style={{ "--bg": `url(${bg3})` }}>
            <h3 className="offer__title">
              For those
              <br /> who dream
              <br /> of stars
            </h3>
            <p className="offer__text">Our offer: make your dream come true</p>
            <Button type="outline">Learn more</Button>
          </div>
          <div className="offers__item offer" style={{ "--bg": `url(${bg4})` }}>
            <h3 className="offer__title">
              Fulfill
              <br /> your fantastic
              <br /> dreams
            </h3>
            <p className="offer__text">Space has never been so close</p>
            <Button type="outline">Learn more</Button>
          </div>
        </div>
      </div>

      <div className="info">
        <h3 className="h3">Embark on a space journey</h3>

        <input
          type="checkbox"
          className="info__read-more-state"
          id="info-state"
        />
        <p className="info__text">
          Traveling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
        <p className="info__text info__text-more">
          Traveling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
        <label htmlFor="info-state"></label>
      </div>

      <footer className="footer">
        <RocketSvg className="rocket" />
        <p>Exciting space adventure!</p>
      </footer>
    </div>
  );
}

export default App;
