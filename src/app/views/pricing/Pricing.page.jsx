// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";
// COMPONENTS IMPORTS::==>
import RoomTemplate from "../../components/room/RoomTemplate.component";
import Header from "../../components/header/Header.component";
import PlansWrapper from "../../components/plans/PlansWrapper.component";

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import HeaderImg from "../../assets/components/header/pricing.svg";
import "./Pricing.page.style.scss";
class PricingPage extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const { featuredRooms, allRooms, PlansData } = value;

    return (
      <>
        {/* Header */}
        <Header
          img={""}
          title={"look! what we have done"}
          returnToHomeBtn={"back to home"}
          // BrowseProductsBtn={"browse products"}
          // goToContactsBtn={"keep in touch"}
          checkServicesBtn={"check out services"}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="pricingHeaderWing leftWing">
                  <div className="imgWing">
                    <img src={HeaderImg} alt="img" />
                  </div>
                  <div className="textWing">
                    <p className="text">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="pricingHeaderWing rightWing">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora quae eum excepturi?
                </div>
              </div>
            </div>
          </div>
        </Header>

        {/* plans */}
        <PlansWrapper PlansData={PlansData} />
      </>
    );
  }
}

export default PricingPage;
