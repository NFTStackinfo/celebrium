import { FooterStyle } from './Footer.style'
import { Icon } from '../UIKit'
import { socialList } from './footer-data'
import IconWrapper from '../UIKit/IconWrapper/IconWrapper'

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="content">
          <p className="copyright s2">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

          <ul className="social">
            {socialList.map(({ name, url }) => {
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
            })}
          </ul>
        </div>
      </div>
    </FooterStyle>
  )
}

export default Footer
