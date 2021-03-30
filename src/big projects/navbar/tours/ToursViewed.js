import React from "react";

import "./tourshome.css";
import "../../grid.css";

const ToursViewed = ({ tourViewed, close }) => {
  return (
    <div className="tourshome">
      <div className="grid wide">
        <div className="row">
          <div className="col l-4 m-4 c-12 ">
            <div className="tourshome-description">
              <i className="fas fa-check-circle"></i>
              <span>
                Tour chọn lọc <strong>chất lượng nhất</strong>
              </span>
            </div>
          </div>
          <div className="col l-4 m-4 c-12">
            <div className="tourshome-description">
              <i className="fas fa-check-circle"></i>
              <span>
                Bảo đảm <strong>giá tốt nhất</strong>
              </span>
            </div>
          </div>
          <div className="col l-4 m-4 c-12">
            <div className="tourshome-description">
              <i className="fas fa-check-circle"></i>
              <span>
                Đội ngũ tư vấn <strong>chi tiết và tận tình</strong>
              </span>
            </div>
          </div>

          {tourViewed.length > 0 && (
            <>
              <div className="col l-12 m-12 c-12">
                <h1 className="tourviewed-title">Tours du lịch bạn đã xem gần đây</h1>
              </div>
              {tourViewed.map(tour => {
                return (
                  <div key={tour.id} className="col l-4 m-6 c-12">
                    <div className="tourviewed">
                      <div className="tourviewed-img-gift">
                        {tour.discount && <i className="fas fa-gift"></i>}
                        <img src={tour.img} alt={tour.name} />
                      </div>
                      <div className="tourviewed-info">
                        <div className="tourviewed-name-icon">
                          <h1 className="tourviewed-name"> {tour.name}</h1>
                          <i onClick={() => close(tour.id)} className="fa fa-times"></i>
                        </div>

                        {tour.rating && (
                          <div className="tourviewed-rating">
                            {tour.rating.map((rate, index) => (
                              <span key={index}>{rate}</span>
                            ))}
                          </div>
                        )}

                        <p className="tourviewed-price">
                          {/* <span className="tourviewed-money">{tour.price.toLocaleString()}</span> */}
                          <span>VND</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToursViewed;
