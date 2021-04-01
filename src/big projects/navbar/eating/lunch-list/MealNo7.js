import React, { useState, useEffect, useReducer } from "react";
import { reducer } from "./reducer399k";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import listMeal from "../ListMeal";
import "./lunchlist.css";
import "../../../grid.css";

// Components
import NavbarEating from "../NavbarEating";
import FooterTop from "../../tours/FooterTop";
import FooterBottom from "../FooterBottom";
import img from "../../../img/Eating/lunch/bun bo hue gan (2)____horizontal-730x456.jpg";

// localStorage Default State
const getLocalStorageDefaultState = () => {
  let stateNo7 = localStorage.getItem("stateNo7");
  if (stateNo7) {
    return JSON.parse(localStorage.getItem("stateNo7"));
  } else {
    return {
      price: 0,
      dayPerWeek: 0,
      quantity: 1,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
      isChecked5: false,
      isChecked6: false,
      checkBox: false,
      checkSpoonChopstick: false,
      checkBlackCoffee: false,
      checkLemonTea: false,
      checkMilkCoffee: false,
      quantityBox: 0,
      quantitySpoonChopstick: 0,
      quantityBlackCoffee: 0,
      quantityLemonTea: 0,
      quantityMilkCoffee: 0,
    };
  }
};

const MealNo7 = () => {
  const [stateNo7, dispatch] = useReducer(reducer, getLocalStorageDefaultState());
  const [filterMeal, setFilterMeal] = useState(listMeal);
  const [showRequire, setShowRequire] = useState(false);
  const [showPickDay, setShowPickDay] = useState(false);
  const { listCart, setListCart } = useGlobalContext();

  useEffect(() => {
    const mealChoose = filterMeal.find((meal) => meal.to === "bua-trua-dac-sac-sai-gon-deluxe");
    setFilterMeal(mealChoose);
    // eslint-disable-next-line
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
  useEffect(() => {
    localStorage.setItem("stateNo7", JSON.stringify(stateNo7));
  }, [stateNo7]);

  const { id, mealName, rating, description, chefImg, chefName, price, to } = filterMeal;

  const handleChange = (type) => {
    if (document.getElementById(type).checked) {
      dispatch({ type: "SAVE_CHECKED", payload: type });
    } else {
      dispatch({ type: "UNSAVE_CHECKED", payload: type });
    }
  };
  const handleClick = (type) => {
    if (document.getElementById(type).checked) {
      dispatch({ type: "CLICK", payload: type });
    } else {
      dispatch({ type: "UN_CLICK", payload: type });
    }
  };

  const decreaseMeal = () => {
    if (stateNo7.quantity <= 1) {
      dispatch({ type: "EQUAL_1" });
    } else {
      dispatch({ type: "DECREASE" });
    }
  };
  const increaseMeal = () => {
    if (stateNo7.quantity >= 50) {
      dispatch({ type: "EQUAL_50" });
    } else {
      dispatch({ type: "INCREASE" });
    }
  };

  const addCart = (id) => {
    setListCart([
      ...listCart,
      {
        ...filterMeal,
        id: id + new Date().getTime().toString(),
        quantity: 1,
        price: stateNo7.price,
        dayPerWeek: stateNo7.dayPerWeek,
      },
    ]);
  };

  return (
    <>
      <NavbarEating />
      <div className='lunchlist-container'>
        <div className='grid wide'>
          <div className='row'>
            {/* Breadcrumbs */}
            <nav className='col l-12 m-12 c-12'>
              <ul className='lunchlist-navbar'>
                <li className='lunchlist-item'>
                  <Link className='lunchlist-link' to='/an-uong'>
                    <span>Trang chủ</span>
                  </Link>
                </li>
                <li className='lunchlist-item'>
                  <Link className='lunchlist-link' to='/an-uong'>
                    <span>Combo bữa trưa</span>
                  </Link>
                </li>
                <li className='lunchlist-item'>
                  <Link className='lunchlist-choose' to={`${to}`}>
                    <span>{mealName}</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Name */}
            <div className='col l-12 m-12 c-12'>
              <h2 className='lunchlist-name'>{mealName}</h2>
            </div>
            <div className='col l-8 m-12 c-12'>
              {/* Rating and Price */}
              <div className='lunchlist-ratingprice'>
                {rating !== undefined ? (
                  <p className='lunchlist-rating'>
                    {rating.map((desc, index) => (
                      <span key={index}>{desc}</span>
                    ))}
                  </p>
                ) : (
                  ""
                )}
                <p>
                  {price !== undefined ? <span>{price.toLocaleString()}</span> : ""}
                  <span> đ/tuần</span>
                </p>
              </div>
            </div>
            {/* Info */}
            <div className='col l-8 m-12 c-12'>
              {/* Image and Description */}
              <div className='lunchlist-imgdesc'>
                {description && <span>{description}</span>}
                <img src={img} alt={mealName} className='lunchlist-img' />
              </div>

              {/* Introduce */}
              <div className='lunchlist-introduce'>
                <div className='row'>
                  <div className='col l-6 m-12 c-12'>
                    <div className='lunchlist-whychoose'>
                      <h3>Tại sao bạn nên chọn gói này?</h3>
                      <p>
                        Khi đặt combo này, thực khách sẽ được thưởng thức các món ăn đặc sản hấp dẫn như: bún bò Huế giò
                        gân, ức vịt xông khói sốt cam, nem nướng Nha Trang, bánh canh cua thập cẩm, mỳ xào hải sản và bò
                        do đầu bếp của nhà hàng Spice Việt Sài Gòn chế biến.
                      </p>
                      <p>
                        Trong thực đơn tuần này, nổi bật phải kể đến món bún bò Huế giò gân với hương vị đặc sệt xứ Huế,
                        dậy mùi thơm của bò, sợ bún ngon, giò gân mềm vừa siêu ngon.
                      </p>
                      <p>
                        Ẩm thực không đơn thuần là ăn uống mà còn là một nghệ thuật. Hiểu được điều đó, nhà hàng Spice
                        Việt luôn chú trọng đến hương vị, nhưng không có nghĩa bỏ qua khâu bày biện và trang trí cho món
                        ăn thêm bắt mắt. Sự tỉ mỉ, tinh tế được thể hiện rất rõ qua cách sắp xếp, phối hợp màu sắc càng
                        làm cho món ăn thêm phần hấp dẫn.
                      </p>
                    </div>
                  </div>

                  <div className='col l-6 m-12 c-12'>
                    <div className='lunchlist-designed'>
                      <h3>Thực đơn được thiết kế bởi</h3>
                      <div className='lunchlist-chefinfo'>
                        <img src={chefImg} alt={chefName} className='chef-img' />
                        <p>Bộ sưu tập món ngon iVIVU đề cử</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Week */}
              <div className='lunchlist-menuweek'>
                <div className='menuweek'>
                  <h3>
                    Thực đơn tuần
                    <span>
                      15.02 <i className='fas fa-arrow-right'></i> 19.02
                    </span>
                  </h3>
                  <button onClick={() => setShowPickDay(true)}>Thay đổi</button>
                </div>
                {showPickDay && (
                  <div className={`modal-overlay ${showPickDay ? "show-modal" : ""}`}>
                    <div className='lunchlist-pickdayform'>
                      <i onClick={() => setShowPickDay(false)} className='fas fa-times'></i>
                      <h3>Bỏ bớt ngày không phù hợp</h3>
                      <p>Thứ 2, 15.02 → Thứ 6, 19.02</p>
                      <div>
                        <input
                          id='monday'
                          type='checkbox'
                          checked={stateNo7.isChecked2}
                          onChange={() => handleChange("monday")}
                          onClick={() => handleClick("monday")}
                        />
                        <label htmlFor='monday'>
                          <p>Thứ 2 · Ức vịt xông khói sốt cam</p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='tuesday'
                          type='checkbox'
                          checked={stateNo7.isChecked3}
                          onChange={() => handleChange("tuesday")}
                          onClick={() => handleClick("tuesday")}
                        />
                        <label htmlFor='tuesday'>
                          <p>Thứ 3 · Hủ tiếu Nam Vang đặc biệt</p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='wednesday'
                          type='checkbox'
                          checked={stateNo7.isChecked4}
                          onChange={() => handleChange("wednesday")}
                          onClick={() => handleClick("wednesday")}
                        />
                        <label htmlFor='wednesday'>
                          <p>Thứ 4 · Bún bò Huế giò gân</p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='thursday'
                          type='checkbox'
                          checked={stateNo7.isChecked5}
                          onChange={() => handleChange("thursday")}
                          onClick={() => handleClick("thursday")}
                        />
                        <label htmlFor='thursday'>
                          <p>Thứ 5 · Bún thập cẩm đặc trưng Spice Việt</p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='friday'
                          type='checkbox'
                          checked={stateNo7.isChecked6}
                          onChange={() => handleChange("friday")}
                          onClick={() => handleClick("friday")}
                        />
                        <label htmlFor='friday'>
                          <p>Thứ 6 · Bún mắm miền tây</p>
                        </label>
                      </div>
                      <div className='lunchlist-pickdayformtotal'>
                        <p>Tổng cộng</p>
                        <p>
                          <span>{stateNo7.price.toLocaleString()}</span>
                          <span> đ/ {stateNo7.dayPerWeek >= 5 ? "tuần" : `${stateNo7.dayPerWeek} ngày`}</span>
                        </p>
                      </div>
                      <div className='lunchlist-pickdayformbtn'>
                        <button onClick={() => setShowPickDay(false)}>Huỷ</button>
                        <button onClick={() => setShowPickDay(false)}>Xác nhận</button>
                      </div>
                    </div>
                  </div>
                )}
                <div className='row'>
                  <div className={`col l-2-4 m-2-4 c-12`}>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 2 15.02</span>
                      </div>
                      <h5>Ức vịt xông khói sốt cam</h5>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Spice Viet Sai Gon</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 3 16.02</span>
                      </div>
                      <h5>Hủ tiếu Nam Vang đặc biệt</h5>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Spice Viet Sai Gon</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 4 17.02</span>
                      </div>
                      <h5>Bún bò Huế giò gân</h5>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Spice Viet Sai Gon</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 5 18.02</span>
                      </div>
                      <h5>Bún thập cẩm đặc trưng Spice Việt</h5>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Spice Viet Sai Gon</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 6 19.02</span>
                      </div>
                      <h5>Bún mắm miền tây</h5>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Spice Viet Sai Gon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className='lunchlist-delivery'>
                <h3>Phương thức giao hàng</h3>
                <p>Bữa trưa được đóng gói trong khay nhựa thực phẩm ngay trước khi giao</p>
                <p>Giao hàng miễn phí từ 11h15 đến 12h00 hàng ngày tại các khu vực:</p>
                <p>
                  <b>Hồ Chí Minh</b>: Quận 1, Quận 10, Quận 11, Quận 2, Quận 3, Quận 4, Quận 5, Quận 6, Quận 7, Quận 8,
                  Quận Bình Thạnh, Quận Gò Vấp, Quận Phú Nhuận, Quận Tân Bình, Quận Tân Phú.
                </p>
                <p>
                  Quý khách ngoài khu vực trên vui lòng để lại thông tin liên lạc, iVIVU sẽ cố gắng hỗ trợ Quý khách
                  trong thời gian sớm nhất.
                </p>
                <p onClick={() => setShowRequire(true)}>
                  Yêu cầu giao khu vực khác
                  <i className='fas fa-angle-right'></i>
                </p>
              </div>
              {showRequire && (
                <div className={`modal-overlay ${showRequire ? "show-modal" : ""}`}>
                  <div className='lunchlist-sendrequire'>
                    <i onClick={() => setShowRequire(false)} className='fas fa-times'></i>
                    <h3>Yêu cầu giao khu vực khác</h3>
                    <div>
                      <label htmlFor=''>Tên đầy đủ *</label>
                      <input type='text' />
                    </div>
                    <div>
                      <label htmlFor=''>Số di động</label>
                      <input type='text' />
                    </div>
                    <div>
                      <label htmlFor=''>Email</label>
                      <input type='email' />
                    </div>
                    <div>
                      <label htmlFor=''>Địa chỉ giao hàng</label>
                      <input type='text' />
                    </div>
                    <button>Gửi yêu cầu</button>
                  </div>
                </div>
              )}
            </div>

            {/* Price Table */}
            <div className='col l-4 m-12 c-12'>
              <div className='lunchlist-pricetable'>
                <div className='lunchlist-firsttable'>
                  <h4>
                    Thực đơn tuần thứ 2, 15.02
                    <i className='fas fa-arrow-right'></i> thứ 6, 19.02
                  </h4>
                  <div>
                    <div className='lunchlist-quantity'>
                      <button disabled={stateNo7.price === 0} onClick={decreaseMeal}>
                        -
                      </button>
                      <span className='lunchlist-quantitypart'>{stateNo7.quantity}</span>
                      <button disabled={stateNo7.price === 0} onClick={increaseMeal}>
                        +
                      </button>
                      <span className='lunchlist-part'>Phần</span>
                    </div>
                    <div className='lunchlist-tools'>
                      <div className='lunchlist-box'>
                        <div>
                          <input
                            type='checkbox'
                            id='morebox'
                            disabled={stateNo7.price === 0}
                            checked={stateNo7.checkBox}
                            onChange={() => handleChange("morebox")}
                            onClick={() => handleClick("morebox")}
                          />
                          <label htmlFor='morebox'>Hộp thêm</label>
                        </div>
                        <div>
                          <span>+ 2.000 </span>
                          <span>đ/ngày</span>
                        </div>
                      </div>
                      <div className='lunchlist-spoonchopstick'>
                        <div>
                          <input
                            type='checkbox'
                            id='spoonchopstick'
                            disabled={stateNo7.price === 0}
                            checked={stateNo7.checkSpoonChopstick}
                            onChange={() => handleChange("spoonchopstick")}
                            onClick={() => handleClick("spoonchopstick")}
                          />
                          <label htmlFor='spoonchopstick'>Muỗng đũa</label>
                        </div>
                        <div>
                          <span>+ 2.000 </span>
                          <span>đ/ngày</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='lunchlist-secondtable'>
                  <p>Nước uống dùng kèm</p>
                  <div className='lunchlist-blackcoffee'>
                    <div>
                      <input
                        type='checkbox'
                        id='blackcoffee'
                        disabled={stateNo7.price === 0}
                        checked={stateNo7.checkBlackCoffee}
                        onChange={() => handleChange("blackcoffee")}
                        onClick={() => handleClick("blackcoffee")}
                      />
                      <label htmlFor='blackcoffee'>Cafe đen</label>
                    </div>
                    <div>
                      <span>+ 10.000 </span>
                      <span>đ/ngày</span>
                    </div>
                  </div>
                  <div className='lunchlist-lemontea'>
                    <div>
                      <input
                        type='checkbox'
                        id='lemontea'
                        disabled={stateNo7.price === 0}
                        checked={stateNo7.checkLemonTea}
                        onChange={() => handleChange("lemontea")}
                        onClick={() => handleClick("lemontea")}
                      />
                      <label htmlFor='lemontea'>Trà chanh</label>
                    </div>
                    <div>
                      <span>+ 10.000 </span>
                      <span>đ/ngày</span>
                    </div>
                  </div>
                  <div className='lunchlist-milkcoffee'>
                    <div>
                      <input
                        type='checkbox'
                        id='milkcoffee'
                        disabled={stateNo7.price === 0}
                        checked={stateNo7.checkMilkCoffee}
                        onChange={() => handleChange("milkcoffee")}
                        onClick={() => handleClick("milkcoffee")}
                      />
                      <label htmlFor='milkcoffee'>Cafe sữa</label>
                    </div>
                    <div>
                      <span>+ 15.000 </span>
                      <span>đ/ngày</span>
                    </div>
                  </div>
                </div>
                <div className='lunchlist-thirdtable'>
                  <div className='lunchlist-totalprice'>
                    <span>Tổng cộng</span>
                    <p>
                      <span className='lunchlist-total'>{stateNo7.price.toLocaleString()}</span>
                      <span> đ/ {stateNo7.dayPerWeek >= 5 ? "tuần" : `${stateNo7.dayPerWeek} ngày`}</span>
                    </p>
                  </div>
                  <div className='lunchlist-btnaddorder'>
                    <button
                      disabled={stateNo7.price === 0}
                      className={`${stateNo7.price === 0 ? "btnadd-ban" : "lunchlist-btnadd"}`}
                      onClick={() => addCart(id)}
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <button
                      disabled={stateNo7.price === 0}
                      className={`${stateNo7.price === 0 ? "btnorder-ban" : "lunchlist-btnorder"}`}
                    >
                      Đặt ngay
                    </button>
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

export default MealNo7;
