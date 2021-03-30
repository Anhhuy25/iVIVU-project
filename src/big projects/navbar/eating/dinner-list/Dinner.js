import React from "react";
import "../../../grid.css";
import "./dinner.css";

import img1 from "../../../img/Eating/dinner/1b____horizontal.jpg";
import img2 from "../../../img/Eating/dinner/20200504_165630____horizontal.jpg";
import img3 from "../../../img/Eating/dinner/detailtietkiem____horizontal.png";

const Dinner = () => {
  return (
    <div>
      <div className="grid wide">
        <h1>Đậm đà nhiều đạm</h1>
        <p>Giàu năng lượng, cân bằng dinh dưỡng</p>
        <div className="row no-gutters">
          <div className="col l-4 m-6 c-12 dinnerinfo">
            <h3 className="dinner-title">Bữa tối đậm đà tiết kiệm</h3>
            <p className="dinner-rating">
              <span>9.8</span>
              <span>Tuyệt vời</span>
              <span>| 72 đánh giá</span>
            </p>
            <p className="dinner-description">
              Bữa tối đầy đủ được chọn từ các loại nguyên liệu, thực phẩm phổ biến như thịt heo, thịt gà, các loại cá và
              rau xanh tươi ngon như rau cải, rau muống, bí xanh,… Sẵn sàng cho bữa ăn gia đình nhẹ nhàng, đơn giản và
              dinh dưỡng đảm bảo
            </p>
            <div className="dinner-pricebtn">
              <p>1 tuần chỉ</p>
              <p className="dinner-price">
                <span>99.000</span>
                <span> đ</span>
              </p>
              <button className="dinner-btn">Xem ngay</button>
            </div>
          </div>

          <div className="col l-8 m-6 c-12">
            <img src={img1} alt="Bữa tối đậm đà tiết kiệm" className="dinner-img" />
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col l-8 m-6 c-12">
            <img src={img2} alt="Bữa tối đậm đà tiêu chuẩn" className="dinner-img" />
          </div>
          <div className="col l-4 m-6 c-12 dinnerinfo">
            <h3 className="dinner-title">Bữa tối đậm đà tiêu chuẩn</h3>
            <p className="dinner-rating">
              <span>9.7</span>
              <span>Tuyệt vời</span>
              <span>| 46 đánh giá</span>
            </p>
            <p className="dinner-description">
              Là sự kết hợp của những loại nguyên liệu, thực phẩm chất lượng cao như các loại nấm, sườn non, thịt bò, cá
              hồi, tôm sú, gà ta thả vườn… cùng những loại củ quả, rau xanh đặc sản như bông thiên lý, bông bí, măng
              tây, rau cải bina,… Với gói nguyên liệu tiêu chuẩn, mỗi bữa tối đều là một bữa ăn ngon miệng tuyệt vời.
            </p>
            <div className="dinner-pricebtn">
              <p>1 tuần chỉ</p>
              <p className="dinner-price">
                <span>199.000</span>
                <span> đ</span>
              </p>
              <button className="dinner-btn">Xem ngay</button>
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col l-4 m-6 c-12 dinnerinfo">
            <h3 className="dinner-title">Bữa tối đậm đà cao cấp</h3>
            <p className="dinner-rating">
              <span>9.9</span>
              <span>Tuyệt vời</span>
              <span>| 16 đánh giá</span>
            </p>
            <p className="dinner-description">
              Mỗi bữa tối sẽ là một đại tiệc thưởng thức tinh hoa ẩm thực với gói nguyên liệu bữa tối cao cấp. Các loại
              thực phẩm hảo hạng như cá hồi Na Uy, tôm càng, vẹm xanh, các loại nấm cao cấp như nấm hương, nấm đùi gà,
              rau xanh cao cấp,… Nguyên liệu, thực phẩm ngon nhất được kết hợp với nhau một cách hợp lý để bữa ăn của
              bạn vừa ngon mắt, vừa bổ dưỡng lại cân bằng dinh dưỡng.
            </p>
            <div className="dinner-pricebtn">
              <p>1 tuần chỉ</p>
              <p className="dinner-price">
                <span>299.000</span>
                <span> đ</span>
              </p>
              <button className="dinner-btn">Xem ngay</button>
            </div>
          </div>

          <div className="col l-8 m-6 c-12">
            <img src={img3} alt="Bữa tối đậm đà cao cấp" className="dinner-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dinner;
