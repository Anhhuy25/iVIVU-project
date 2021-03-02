import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import listMeal from "../ListMeal";
import "./lunchlist.css";
import "../../../grid.css";

// Components
import NavbarEating from "../NavbarEating";
import FooterTop from "../../tours/FooterTop";
import FooterBottom from "../FooterBottom";
import img from "../../../img/Eating/lunch/trung duc thit2____horizontal-730x456.png";

const MealNo2 = () => {
  const [filterMeal, setFilterMeal] = useState(listMeal);
  const [showRequire, setShowRequire] = useState(false);
  const [mealQuantity, setMealQuantity] = useState(1);
  const [showPickDay, setShowPickDay] = useState(false);
  const { listCart, setListCart } = useGlobalContext();

  useEffect(() => {
    const mealChoose = filterMeal.find(
      (meal) => meal.to === "bua-trua-dam-da-vi-trung-standard"
    );
    setFilterMeal(mealChoose);
  }, []);
  useEffect(() => {
    if (showRequire) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [showRequire]);
  useEffect(() => {
    if (showPickDay) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [showPickDay]);

  const decreaseMeal = () => {
    if (mealQuantity <= 1) {
      setMealQuantity(1);
    } else {
      setMealQuantity(mealQuantity - 1);
    }
  };
  const increaseMeal = () => {
    if (mealQuantity >= 100) {
      setMealQuantity(100);
    } else {
      setMealQuantity(mealQuantity + 1);
    }
  };

  const addCart = (id) => {
    const addedItem = listCart.find((x) => x.id === id);
    if (addedItem) {
      setListCart(
        listCart.map((y) =>
          y.id === id ? { ...addedItem, quantity: addedItem.quantity + 1 } : y
        )
      );
    } else {
      setListCart([...listCart, { ...filterMeal, quantity: 1 }]);
    }
  };

  const {
    id,
    mealName,
    rating,
    description,
    chefImg,
    chefName,
    restaurantName,
    price,
    to,
  } = filterMeal;

  return (
    <>
      <NavbarEating />
      <div className="lunchlist-container">
        <div className="grid wide">
          <div className="row">
            {/* Breadcrumbs */}
            <nav className="col l-12 m-12 c-12">
              <ul className="lunchlist-navbar">
                <li className="lunchlist-item">
                  <Link className="lunchlist-link" to="/an-uong">
                    <span>Trang chủ</span>
                  </Link>
                </li>
                <li className="lunchlist-item">
                  <Link className="lunchlist-link" to="/an-uong">
                    <span>Combo bữa trưa</span>
                  </Link>
                </li>
                <li className="lunchlist-item">
                  <Link className="lunchlist-choose" to={`${to}`}>
                    <span>{mealName}</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Name */}
            <div className="col l-12 m-12 c-12">
              <h2 className="lunchlist-name">{mealName}</h2>
            </div>
            <div className="col l-8 m-12 c-12">
              {/* Rating and Price */}
              <div className="lunchlist-ratingprice">
                {rating !== undefined ? (
                  <p className="lunchlist-rating">
                    {rating.map((desc, index) => (
                      <span key={index}>{desc}</span>
                    ))}
                  </p>
                ) : (
                  ""
                )}
                <p>
                  {price !== undefined ? (
                    <span>{price.toLocaleString()}</span>
                  ) : (
                    ""
                  )}
                  <span> đ/tuần</span>
                </p>
              </div>
            </div>
            {/* Info */}
            <div className="col l-8 m-12 c-12">
              {/* Image and Description */}
              <div className="lunchlist-imgdesc">
                {description && <span>{description}</span>}
                <img src={img} alt={mealName} className="lunchlist-img" />
              </div>

              {/* Introduce */}
              <div className="lunchlist-introduce">
                <div className="row">
                  <div className="col l-6 m-12 c-12">
                    <div className="lunchlist-whychoose">
                      <h3>Tại sao bạn nên chọn gói này?</h3>
                      <p>
                        Không cần suy nghĩ trưa nay ăn gì với combo bữa trưa,
                        đầu bếp đã thiết kế thực đơn bữa trưa tuần này cho bạn
                        với những sự kết hợp hoàn hảo: Cá ngừ kho nước mía, chả
                        cá kho tiêu, đậu cove xào thịt, trứng đúc thịt, thịt kho
                        đậu hủ cho một bữa trưa ngon miệng và đầy dinh dưỡng.
                      </p>
                      <p>
                        Đặc biệt, bạn sẽ được thưởng thức món chả cá kho tiêu,
                        vị ngậy ngậy của từng miếng chả cá được tẩm ướp và kho
                        thơm mùi vị cay cay của hạt tiêu, ăn kèm với cơm nóng
                        thì còn gì tuyệt vời bằng.
                      </p>
                      <p>
                        Đừng bỏ qua những món phụ được chế biến đa dạng thay đổi
                        mỗi ngày như: Cải ngọt luộc, bắp cải luộc, đậu hũ chiên
                        sả, rau muống xào tỏi... đến các món canh thanh mát sẽ
                        cung cấp thêm dinh dưỡng cho bạn như: Canh cà chua nấu
                        hến, canh mít non nấu thịt, canh cải thảo nấu thịt...
                      </p>
                    </div>
                  </div>

                  <div className="col l-6 m-12 c-12">
                    <div className="lunchlist-designed">
                      <h3>Thực đơn được thiết kế bởi</h3>
                      <div className="lunchlist-chefinfo">
                        <img
                          src={chefImg}
                          alt={chefName}
                          className="chef-img"
                        />
                        <p>{chefName}</p>
                        <p>{restaurantName}</p>
                      </div>
                      <p className="lunclist-chefdesc">
                        Huỳnh Văn Pháp là đầu bếp từng làm ở nhiều khách sạn nổi
                        tiếng ở Huế như: Huế Queen, Alba, Hùng Vương và nay là
                        đầu bếp của khách sạn EMM Huế và nhà hàng Spice Viet
                        Huế. Được đào tạo chuyên các món Âu và Á, đặc biệt là
                        các món đặc sản Huế mang đến cho thực khách những thực
                        đơn “ngon – bổ - rẻ” mỗi ngày.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Week */}
              <div className="lunchlist-menuweek">
                <div className="menuweek">
                  <h3>
                    Thực đơn tuần
                    <span>
                      15.02 <i className="fas fa-arrow-right"></i> 19.02
                    </span>
                  </h3>
                  <button onClick={() => setShowPickDay(true)}>Thay đổi</button>
                </div>
                {showPickDay && (
                  <div
                    className={`modal-overlay ${
                      showPickDay ? "show-modal" : ""
                    }`}
                  >
                    <div className="lunchlist-pickdayform">
                      <i
                        onClick={() => setShowPickDay(false)}
                        className="fas fa-times"
                      ></i>
                      <h3>Bỏ bớt ngày không phù hợp</h3>
                      <p>Thứ 2, 15.02 → Thứ 6, 19.02</p>
                      <div>
                        <input id="monday" type="checkbox" />
                        <label htmlFor="monday">
                          <p>Thứ 2 · Đậu cove xào thịt</p>
                          <p>· Đậu hũ chiên sả · Canh cải thảo nấu thịt</p>
                        </label>
                      </div>
                      <div>
                        <input id="tuesday" type="checkbox" />
                        <label htmlFor="tuesday">
                          <p>Thứ 3 · Chả cá kho tiêu</p>
                          <p>· Bắp cải luộc · Canh mít non nấu thịt </p>
                        </label>
                      </div>
                      <div>
                        <input id="wednesday" type="checkbox" />
                        <label htmlFor="wednesday">
                          <p>Thứ 4 · Cá ngừ kho nước mía</p>
                          <p>· Cải ngọt luộc · Canh cà chua nấu hến</p>
                        </label>
                      </div>
                      <div>
                        <input id="thursday" type="checkbox" />
                        <label htmlFor="thursday">
                          <p>Thứ 5 · Trứng đúc thịt</p>
                          <p>· Rau muống xào tỏi · Canh cải bẹ xanh nấu thịt</p>
                        </label>
                      </div>
                      <div>
                        <input id="friday" type="checkbox" />
                        <label htmlFor="friday">
                          <p>Thứ 6 · Thịt kho đậu hũ</p>
                          <p>
                            · Dưa leo, xà lách tươi · Canh rau muống nấu tép
                          </p>
                        </label>
                      </div>
                      <div className="lunchlist-pickdayformtotal">
                        <p>Tổng cộng</p>
                        <p>
                          <span>{price.toLocaleString()}</span>
                          <span> đ/tuần</span>
                        </p>
                      </div>
                      <div className="lunchlist-pickdayformbtn">
                        <button onClick={() => setShowPickDay(false)}>
                          Huỷ
                        </button>
                        <button>Xác nhận</button>
                      </div>
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className={`col l-2-4 m-2-4 c-12`}>
                    <div className="lunchlist-menudetail">
                      <div className="lunchlist-dayinweek">
                        <span>Thứ 2 15.02</span>
                      </div>
                      <h5>
                        Đậu cove <br /> xào thịt
                      </h5>
                      .....
                      <p className="lunchlist-submeal1">
                        Đậu hũ <br /> chiên xả
                      </p>
                      .....
                      <p className="lunchlist-submeal2">
                        Canh cải thảo <br /> nấu thịt
                      </p>
                      .....
                      <div className="lunchlist-ricedesert">
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className="col l-2-4 m-2-4 c-12">
                    <div className="lunchlist-menudetail">
                      <div className="lunchlist-dayinweek">
                        <span>Thứ 3 16.02</span>
                      </div>
                      <h5>
                        Chả cá <br /> kho tiêu
                      </h5>
                      .....
                      <p className="lunchlist-submeal1">
                        Bắp cải <br /> luộc
                      </p>
                      .....
                      <p className="lunchlist-submeal2">
                        Canh mít non <br /> nấu thịt
                      </p>
                      .....
                      <div className="lunchlist-ricedesert">
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className="col l-2-4 m-2-4 c-12">
                    <div className="lunchlist-menudetail">
                      <div className="lunchlist-dayinweek">
                        <span>Thứ 4 17.02</span>
                      </div>
                      <h5>
                        Cá ngừ <br /> kho nước mía
                      </h5>
                      .....
                      <p className="lunchlist-submeal1">
                        Cải ngọt <br /> luộc
                      </p>
                      .....
                      <p className="lunchlist-submeal2">
                        Canh cà chua <br /> nấu hến
                      </p>
                      .....
                      <div className="lunchlist-ricedesert">
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className="col l-2-4 m-2-4 c-12">
                    <div className="lunchlist-menudetail">
                      <div className="lunchlist-dayinweek">
                        <span>Thứ 5 18.02</span>
                      </div>
                      <h5>
                        Trứng <br /> đúc thịt
                      </h5>
                      .....
                      <p className="lunchlist-submeal1">
                        Rau muống <br /> xào tỏi
                      </p>
                      .....
                      <p className="lunchlist-submeal2">
                        Canh cải bẹ <br /> xanh nấu thịt
                      </p>
                      .....
                      <div className="lunchlist-ricedesert">
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className="col l-2-4 m-2-4 c-12">
                    <div className="lunchlist-menudetail">
                      <div className="lunchlist-dayinweek">
                        <span>Thứ 6 19.02</span>
                      </div>
                      <h5>
                        Thịt kho <br /> đậu hủ
                      </h5>
                      .....
                      <p className="lunchlist-submeal1">
                        Dưa leo <br /> xà lách tươi
                      </p>
                      .....
                      <p className="lunchlist-submeal2">
                        Canh rau muống <br /> nấu tép
                      </p>
                      .....
                      <div className="lunchlist-ricedesert">
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="lunchlist-delivery">
                <h3>Phương thức giao hàng</h3>
                <p>
                  Bữa trưa được đóng gói trong khay nhựa thực phẩm ngay trước
                  khi giao
                </p>
                <p>
                  Giao hàng miễn phí từ 11h15 đến 12h00 hàng ngày tại các khu
                  vực:
                </p>
                <p>
                  <b>Hồ Chí Minh</b>: Quận 1, Quận 10, Quận 11, Quận 2, Quận 3,
                  Quận 4, Quận 5, Quận 6, Quận 7, Quận 8, Quận Bình Thạnh, Quận
                  Gò Vấp, Quận Phú Nhuận, Quận Tân Bình, Quận Tân Phú.
                </p>
                <p>
                  Quý khách ngoài khu vực trên vui lòng để lại thông tin liên
                  lạc, iVIVU sẽ cố gắng hỗ trợ Quý khách trong thời gian sớm
                  nhất.
                </p>
                <p onClick={() => setShowRequire(true)}>
                  Yêu cầu giao khu vực khác
                  <i className="fas fa-angle-right"></i>
                </p>
              </div>
              {showRequire && (
                <div
                  className={`modal-overlay ${showRequire ? "show-modal" : ""}`}
                >
                  <div className="lunchlist-sendrequire">
                    <i
                      onClick={() => setShowRequire(false)}
                      className="fas fa-times"
                    ></i>
                    <h3>Yêu cầu giao khu vực khác</h3>
                    <div>
                      <label htmlFor="">Tên đầy đủ *</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label htmlFor="">Số di động</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label htmlFor="">Email</label>
                      <input type="email" />
                    </div>
                    <div>
                      <label htmlFor="">Địa chỉ giao hàng</label>
                      <input type="text" />
                    </div>
                    <button>Gửi yêu cầu</button>
                  </div>
                </div>
              )}
            </div>

            {/* Price Table */}
            <div className="col l-4 m-12 c-12">
              <div className="lunchlist-pricetable">
                <div className="lunchlist-firsttable">
                  <h4>
                    Thực đơn tuần thứ 2, 15.02
                    <i className="fas fa-arrow-right"></i> thứ 6, 19.02
                  </h4>
                  <div>
                    <div className="lunchlist-quantity">
                      <button onClick={decreaseMeal}>-</button>
                      <span className="lunchlist-quantitypart">
                        {mealQuantity}
                      </span>
                      <button onClick={increaseMeal}>+</button>
                      <span className="lunchlist-part">Phần</span>
                    </div>
                    <div className="lunchlist-tools">
                      <div className="lunchlist-morerice">
                        <div>
                          <input type="checkbox" id="morerice" />
                          <label htmlFor="morerice">Cơm thêm</label>
                        </div>
                        <div>
                          <span>+ 2.000 </span>
                          <span>đ/ngày</span>
                        </div>
                      </div>
                      <div className="lunchlist-spoonchopstick">
                        <div>
                          <input type="checkbox" id="spoonchopstick" />
                          <label htmlFor="spoonchopstick">Muỗng đũa</label>
                        </div>
                        <div>
                          <span>+ 2.000 </span>
                          <span>đ/ngày</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lunchlist-secondtable">
                  <p>Nước uống dùng kèm</p>
                  <div className="lunchlist-blackcoffee">
                    <div>
                      <input type="checkbox" id="blackcoffee" />
                      <label htmlFor="blackcoffee">Cafe đen</label>
                    </div>
                    <div>
                      <span>+ 10.000 </span>
                      <span>đ/ngày</span>
                    </div>
                  </div>
                  <div className="lunchlist-lemontea">
                    <div>
                      <input type="checkbox" id="lemontea" />
                      <label htmlFor="lemontea">Trà chanh</label>
                    </div>
                    <div>
                      <span>+ 10.000 </span>
                      <span>đ/ngày</span>
                    </div>
                  </div>
                  <div className="lunchlist-milkcoffee">
                    <div>
                      <input type="checkbox" id="milkcoffee" />
                      <label htmlFor="milkcoffee">Cafe sữa</label>
                    </div>
                    <div>
                      <span>+ 15.000 </span>
                      <span>đ/ngày</span>
                    </div>
                  </div>
                </div>
                <div className="lunchlist-thirdtable">
                  <div className="lunchlist-totalprice">
                    <span>Tổng cộng</span>
                    <p>
                      {price !== undefined ? (
                        <span className="lunchlist-total">
                          {price.toLocaleString()}
                        </span>
                      ) : (
                        ""
                      )}
                      <span> đ/tuần</span>
                    </p>
                  </div>
                  <div className="lunchlist-btnaddorder">
                    <button
                      className="lunchlist-btnadd"
                      onClick={() => addCart(id)}
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <button className="lunchlist-btnorder">Đặt ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f9f9f9", padding: "0 8px" }}>
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default MealNo2;
