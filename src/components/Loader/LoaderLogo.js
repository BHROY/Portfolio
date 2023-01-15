import React from "react";
import "./LoaderLogo.css";
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { contactPageData } from "../../portfolio.js";
const ContactData = contactPageData.contactSection;
class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="basic-contact">
        <Fade top duration={2000}>
          <Jump top duration={3000} delay={1000}>
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                  style={{    paddingLeft: '20%'}}
                />
              </div>
            </div>
          </Jump>
        </Fade>
         <Zoom duration={2000}>   
          <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactData["sign_image_path"]}`)}
                  alt=""
                  style={{    paddingLeft: '20%'}}
                />
              </div>
            </div>
          </Zoom>
        </div>
      
    );
  }
}

export default LogoLoader;
