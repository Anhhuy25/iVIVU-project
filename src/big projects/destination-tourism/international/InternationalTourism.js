import React from "react";
import { Link } from "react-router-dom";
import "../destinationtourism.css";

import maldives from "../../img/destination/maldives-intinerary-gallery-six-senses-laamu-aerial-1500x675-cr-755x190.jpg";
import switzerland from "../../img/destination/switzerland-safest-country-feature-cr-370x190.jpg";
import singapore from "../../img/destination/singapore-cr-370x190.jpg";
import bangkok from "../../img/destination/bangkok-cr-370x190.jpg";
import bali from "../../img/destination/slide-7-cr-370x190.jpg";

const InternationalTourism = () => {
  return (
    <div className="international-tourism">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <h1 className="international-tourism-title">
              Điểm đến yêu thích nước ngoài
            </h1>
            <p className="international-tourism-description">
              Bao la thế giới. Bốn bể là nhà
            </p>

            <div className="international-tourism-bottom">
              <div className="international-tourism-bottom-left">
                <div className="international-tourism-bottom-left-up">
                  <Link
                    to=""
                    className="international-tourism-link-bottom-left"
                  >
                    <img
                      src={maldives}
                      alt="maldives"
                      className="international-maldives-img"
                    />
                    <div className="international-tourism-info-bottom">
                      <h1>Maldives</h1>
                      <p>67 khách sạn</p>
                    </div>
                    <p className="international-tourism-background-bottom"></p>
                  </Link>
                </div>

                <div className="international-tourism-bottom-left-down">
                  <div className="international-singapore">
                    <Link
                      to=""
                      className="international-tourism-link-bottom-left"
                    >
                      <img
                        src={singapore}
                        alt="singapore"
                        className="international-singapore-img"
                      />
                      <div className="international-tourism-info-bottom">
                        <h1>Singapore</h1>
                        <p>466 khách sạn</p>
                      </div>
                      <p className="international-tourism-background-bottom"></p>
                    </Link>
                  </div>
                  <div className="international-bangkok">
                    <Link
                      to=""
                      className="international-tourism-link-bottom-left"
                    >
                      <img
                        src={bangkok}
                        alt="bangkok"
                        className="international-bangkok-img"
                      />
                      <div className="international-tourism-info-bottom">
                        <h1>Bangkok</h1>
                        <p>2317 khách sạn</p>
                      </div>
                      <p className="international-tourism-background-bottom"></p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="international-tourism-bottom-right-down">
                <div className="international-switzerland">
                  <Link
                    to=""
                    className="international-tourism-link-bottom-right"
                  >
                    <img
                      src={switzerland}
                      alt="switzerland"
                      className="international-switzerland-img"
                    />
                    <div className="international-tourism-info-bottom">
                      <h1>Switzerland</h1>
                      <p>732 khách sạn</p>
                    </div>
                    <p className="international-tourism-background-bottom"></p>
                  </Link>
                </div>

                <div className="international-bali">
                  <Link
                    to=""
                    className="international-tourism-link-bottom-right"
                  >
                    <img
                      src={bali}
                      alt="bali"
                      className="international-bali-img"
                    />
                    <div className="international-tourism-info-bottom">
                      <h1>Bali</h1>
                      <p>2997 khách sạn</p>
                    </div>
                    <p className="international-tourism-background-bottom"></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalTourism;
