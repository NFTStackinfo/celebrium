import { useEffect, useState } from "react";
import { HeaderStyle } from "./Header.style";
import { Icon } from "../UIKit";
import { useLockedBody } from "../../hooks/useLockedBody";
import { navList, socialList } from "./dataHeader";
import IconWrapper from '../UIKit/IconWrapper/IconWrapper'

const Header = ({ onLinkClick }) => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [locked, setLocked] = useLockedBody();

  useEffect(() => {
    if (drawerOpened) {
      document.body.classList.add("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [drawerOpened]);

  const handleDrawerToggle = () => {
    setDrawerOpened(!drawerOpened);
    setLocked(!locked);
  };

  const handleMenuLinkClick = (to) => {
    if (drawerOpened) {
      setDrawerOpened(false);
      setLocked(false);
    }
    onLinkClick(to);
  };
  return (
    <HeaderStyle className={drawerOpened ? "open" : ""}>
      <div className="container">
        <div className="header-content">
          <div className="logo-wrapper">
            <div className="logo" onClick={() => handleMenuLinkClick("#hero")}>
              <img src="/logo.svg" alt="logo" />
              {/*<strong>LOGO</strong>*/}
            </div>
          </div>

          <nav className="header-nav">
            <div className="header-nav-inner">
              <ul className="header-nav-list">
                {navList.map(({ to, title }) => {
                  return (
                    <li key={to} onClick={() => handleMenuLinkClick(to)}>
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
          <ul className="social">
              {
                  socialList.map(({name, url}) => {
                      return (
                          <li key={name}>
                            <IconWrapper
                              target="_blank"
                              href={url}
                              rel="noreferrer"
                              icon={name}
                            />
                          </li>
                      )
                  })
              }
          </ul>
          <button
            className="hamburger"
            type="button"
            onClick={handleDrawerToggle}
          >
            <Icon name={drawerOpened ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
