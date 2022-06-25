import { useEffect, useState } from "react";
import { HeaderStyle } from "./Header.style";
import { Icon } from "../index";
import { useLockedBody } from "../../../hooks/useLockedBody";
import { navList, socialList } from "./dataHeader";
import IconWrapper from '../IconWrapper/IconWrapper'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ onLinkClick }) => {
  const [isMainPage, setIsMainPage] = useState(true)
  const location = useLocation()


  useEffect(() => {
    setIsMainPage(() => location.pathname === '/')
  }, [location])


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

  const handleResize = () => {
    const windowWidth = window.innerWidth

    if (windowWidth > 1199) {
      setLocked(false)
      setDrawerOpened(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return (
    <HeaderStyle className={drawerOpened ? "open" : ""}>
      <div className="container">
        <div className="header-content">
          <div className="logo-wrapper">
            {isMainPage ?
              (
                <div className="logo" onClick={() => handleMenuLinkClick("#hero")}>
                  <img src="/logo.png" alt="logo" />
                </div>
              )
            : (
                <div className="logo">
                  <Link to="/#hero">
                    <img src="/logo.png" alt="logo" />
                  </Link>
                </div>
              )}
          </div>

            <nav className="header-nav">
              <div className="header-nav-inner">
                <ul className="header-nav-list">
                  {navList.map(({ to, title }) => (
                    isMainPage ?
                      (
                        <li key={to} onClick={() => handleMenuLinkClick(to)}>
                          {title}
                        </li>
                      )
                      : (
                        <li key={to}>
                          <Link to={`/${to}`}>{title}</Link>
                        </li>
                      )
                  ))}
                </ul>

                <ul className="social mobile">
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
            <IconWrapper icon={drawerOpened ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
