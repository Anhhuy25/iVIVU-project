import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import { reducer } from "./reducer";
import listMeal from "../ListMeal";
import "./lunchlist.css";
import "../../../grid.css";

// Components
import NavbarEating from "../NavbarEating";
import FooterTop from "../../tours/FooterTop";
import FooterBottom from "../FooterBottom";
import img from "../../../img/Eating/lunch/dui ga nuong1____horizontal-730x456.png";

// localStorage Default State
const getLocalStorageDefaultState = () => {
  let state = localStorage.getItem("state");
  if (state) {
    return JSON.parse(localStorage.getItem("state"));
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
      checkRice: false,
      checkSpoonChopstick: false,
      checkBlackCoffee: false,
      checkLemonTea: false,
      checkMilkCoffee: false,
      quantityRice: 0,
      quantitySpoonChopstick: 0,
      quantityBlackCoffee: 0,
      quantityLemonTea: 0,
      quantityMilkCoffee: 0,
    };
  }
};

const MealNo1 = () => {
  // state lien quan toi defaultState
  const [state, dispatch] = useReducer(reducer, getLocalStorageDefaultState());
  const [filterMeal, setFilterMeal] = useState(listMeal);
  const [showRequire, setShowRequire] = useState(false);
  const [showPickDay, setShowPickDay] = useState(false);
  const { listCart, setListCart } = useGlobalContext();

  useEffect(() => {
    const mealChoose = filterMeal.find((meal) => meal.to === "bua-trua-dam-da-vi-nam-standard");
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
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const { id, mealName, rating, description, chefImg, chefName, restaurantName, price, to } = filterMeal;

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
    if (state.quantity <= 1) {
      dispatch({ type: "EQUAL_1" });
    } else {
      dispatch({ type: "DECREASE" });
    }
  };
  const increaseMeal = () => {
    if (state.quantity >= 50) {
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
        price: state.price,
        dayPerWeek: state.dayPerWeek,
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
                        Cá saba kho cà chuẩn vị miền Nam trong thực đơn tuần này chắc chắn khiến bạn hài lòng, với phần
                        cá được nêm nếm vừa ăn, cộng thêm chút chua rất kích thích vị giác của cà.
                      </p>
                      <p>
                        Món mặn tuần này còn có vịt kho gừng, lòng xào cải chua, thịt kho thơm, gà nướng mè được dùng
                        kèm những món phụ không kém phần hấp dẫn như rau luộc, rau sống, dưa leo, đậu hũ chiên sả, cải
                        thảo xào tỏi, xà lách dầu giấm.
                      </p>
                      <p>
                        Ngoài ra, mỗi bữa trưa còn có nhiều món canh bổ dưỡng giúp bữa trưa thêm tròn vị, gồm: Canh cải
                        thảo nấu thịt, canh bắp cải nấu thịt, canh cải thảo nấu thịt, canh khoai mỡ nấu thịt, canh đu đủ
                        nấu thịt.
                      </p>
                    </div>
                  </div>

                  <div className='col l-6 m-12 c-12'>
                    <div className='lunchlist-designed'>
                      <h3>Thực đơn được thiết kế bởi</h3>
                      <div className='lunchlist-chefinfo'>
                        <img src={chefImg} alt={chefName} className='chef-img' />
                        <p>{chefName}</p>
                        <p>{restaurantName}</p>
                      </div>
                      <p className='lunclist-chefdesc'>
                        Đầu bếp Nguyễn Tấn Trung có gần 20 năm kinh nghiệm làm việc tại các khách sạn 5 sao, nhà hàng
                        nổi tiếng tại TP.HCM như: Windsor Plaza hotel, Sofitel Saigon, MgallerySaigon,… và hiện nay là
                        bếp trưởng của Spice Viet Saigon. Đầu bếp Nguyễn Tấn Trung có thế mạnh với khả năng biến tấu các
                        món ăn phong vị Âu, Á, Hoa và đặc biệt là khả năng thiết kế bữa trưa văn phòng đủ dưỡng chất,
                        ngon miệng.
                      </p>
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
                          checked={state.isChecked2}
                          onChange={() => handleChange("monday")}
                          onClick={() => handleClick("monday")}
                          type='checkbox'
                        />
                        <label htmlFor='monday'>
                          <p>Thứ 2 · Thịt kho khổ qua</p>
                          <p>· Rau muống xào tỏi · Canh rau muống vắt chanh</p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='tuesday'
                          checked={state.isChecked3}
                          onChange={() => handleChange("tuesday")}
                          onClick={() => handleClick("tuesday")}
                          type='checkbox'
                        />
                        <label htmlFor='tuesday'>
                          <p>Thứ 3 · Cá trê chiên giòn mắm gừng</p>
                          <p>· Gỏi xoài · Canh khoai mỡ nấu tôm</p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='wednesday'
                          checked={state.isChecked4}
                          onChange={() => handleChange("wednesday")}
                          onClick={() => handleClick("wednesday")}
                          type='checkbox'
                        />
                        <label htmlFor='wednesday'>
                          <p>Thứ 4 · Cốt lếch áp chảo</p>
                          <p>· Su su xào tỏi · Canh cải xanh nấu thịt</p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='thursday'
                          checked={state.isChecked5}
                          onChange={() => handleChange("thursday")}
                          onClick={() => handleClick("thursday")}
                          type='checkbox'
                        />
                        <label htmlFor='thursday'>
                          <p>Thứ 5 · Đậu hủ nhồi thịt sốt cà</p>
                          <p>· Cải thìa xào tỏi · Canh bắp cải nấu thịt</p>
                        </label>
                      </div>
                      <div>
                        <input
                          id='friday'
                          checked={state.isChecked6}
                          onChange={() => handleChange("friday")}
                          onClick={() => handleClick("friday")}
                          type='checkbox'
                        />
                        <label htmlFor='friday'>
                          <p>Thứ 6 · Chả cá kho cà</p>
                          <p>· Cải ngọt luộc · Canh rau má nấu thịt</p>
                        </label>
                      </div>
                      <div className='lunchlist-pickdayformtotal'>
                        <p>Tổng cộng</p>
                        <p>
                          <span>{state.price.toLocaleString()} </span>
                          <span>đ/ {state.dayPerWeek >= 5 ? "tuần" : `${state.dayPerWeek} ngày`}</span>
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
                      <h5>
                        Thịt kho <br /> khổ qua
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Rau muống <br /> xào tỏi
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh rau muống <br /> vắt chanh
                      </p>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 3 16.02</span>
                      </div>
                      <h5>
                        Cá trê chiên giòn <br /> mắm gừng
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Gỏi <br /> xoài
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh khoai mỡ <br /> nấu tôm
                      </p>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 4 17.02</span>
                      </div>
                      <h5>
                        Cốt lếch <br /> áp chảo
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Su su <br /> xào tỏi
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh cải xanh <br /> nấu thịt
                      </p>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 5 18.02</span>
                      </div>
                      <h5>
                        Đậu hủ nhồi thịt <br /> sốt cà
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Cải thìa <br /> xào tỏi
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh bắp cải <br /> nấu thịt
                      </p>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-4 m-2-4 c-12'>
                    <div className='lunchlist-menudetail'>
                      <div className='lunchlist-dayinweek'>
                        <span>Thứ 6 19.02</span>
                      </div>
                      <h5>
                        Chả cá <br /> kho cà
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Cải ngọt <br /> luộc
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh rau má <br /> nấu thịt
                      </p>
                      .....
                      <div className='lunchlist-ricedesert'>
                        <p>Cơm trắng</p>
                        <p>Tráng miệng</p>
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
                      <button disabled={state.price === 0} onClick={decreaseMeal}>
                        -
                      </button>
                      <span className='lunchlist-quantitypart'>{state.quantity}</span>
                      <button disabled={state.price === 0} onClick={increaseMeal}>
                        +
                      </button>
                      <span className='lunchlist-part'>Phần</span>
                    </div>
                    <div className='lunchlist-tools'>
                      <div className='lunchlist-morerice'>
                        <div>
                          <input
                            type='checkbox'
                            id='morerice'
                            disabled={state.price === 0}
                            checked={state.checkRice}
                            onChange={() => handleChange("morerice")}
                            onClick={() => handleClick("morerice")}
                          />
                          <label htmlFor='morerice'>Cơm thêm</label>
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
                            disabled={state.price === 0}
                            checked={state.checkSpoonChopstick}
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
                        disabled={state.price === 0}
                        checked={state.checkBlackCoffee}
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
                        disabled={state.price === 0}
                        checked={state.checkLemonTea}
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
                        disabled={state.price === 0}
                        checked={state.checkMilkCoffee}
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
                      <span className='lunchlist-total'>{state.price.toLocaleString()}</span>
                      <span> đ/ {state.dayPerWeek >= 5 ? "tuần" : `${state.dayPerWeek} ngày`}</span>
                    </p>
                  </div>
                  <div className='lunchlist-btnaddorder'>
                    <button
                      disabled={state.price === 0}
                      className={`${state.price === 0 ? "btnadd-ban" : "lunchlist-btnadd"}`}
                      onClick={() => addCart(id)}
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <button
                      disabled={state.price === 0}
                      className={`${state.price === 0 ? "btnorder-ban" : "lunchlist-btnorder"}`}
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

export default MealNo1;
