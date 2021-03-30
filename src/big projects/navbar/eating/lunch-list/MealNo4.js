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
import img from "../../../img/Eating/lunch/ga ta hap la chanh1____horizontal-730x456.png";

const MealNo4 = () => {
  const [filterMeal, setFilterMeal] = useState(listMeal);
  const [showRequire, setShowRequire] = useState(false);
  const [mealQuantity, setMealQuantity] = useState(1);
  const [showPickDay, setShowPickDay] = useState(false);
  const { listCart, setListCart } = useGlobalContext();

  useEffect(() => {
    const mealChoose = filterMeal.find((meal) => meal.to === "bua-trua-thanh-dam-vi-nam-standard");
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
      setListCart((y) => (y.id === id ? { ...addedItem, quantity: addedItem.quantity + 1 } : y));
    } else {
      setListCart([...listCart, { ...filterMeal, quantity: 1 }]);
    }
  };

  const { id, mealName, rating, description, chefImg, chefName, restaurantName, price, to } = filterMeal;

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
                        Nổi bật trong tuần này là món chả cá kho cà hấp dẫn. Thịt chả cá dai ngon hòa quyện với sốt cà
                        chua đậm đà ăn kèm với cơm nóng thì ngon còn gì bằng. Các ngày còn lại, bạn sẽ được đổi vị với
                        các món chính như: Trứng cút sốt chua ngọt, cá diêu hồng nướng sả, gà luộc, thịt viên sốt nấm...
                        được chế biến để giữ trọn vẹn hương vị tươi ngon nhất của thực phẩm.
                      </p>
                      <p>
                        Bạn cũng sẽ ưng ý với món canh gà nấm. Món canh với nước dùng gà ngọt thanh kết hợp với vị ngọt
                        của nấm ăn vừa thanh mát, vừa tốt cho sức khỏe.
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
                        <input id='monday' type='checkbox' />
                        <label htmlFor='monday'>
                          <p>Thứ 2 · Cá diêu hồng nướng sả</p>
                          <p>· Cải thìa sốt dầu hào · Canh đậu hủ giá hẹ</p>
                        </label>
                      </div>
                      <div>
                        <input id='tuesday' type='checkbox' />
                        <label htmlFor='tuesday'>
                          <p>Thứ 3 · Trứng cút sốt chua ngọt</p>
                          <p>· Rau củ xào nấm · Canh rau dền nấu nấm rơm </p>
                        </label>
                      </div>
                      <div>
                        <input id='wednesday' type='checkbox' />
                        <label htmlFor='wednesday'>
                          <p>Thứ 4 · Chả cá kho cà</p>
                          <p>· Rau củ luộc · Canh đậu hũ rong biển</p>
                        </label>
                      </div>
                      <div>
                        <input id='thursday' type='checkbox' />
                        <label htmlFor='thursday'>
                          <p>Thứ 5 · Thịt gà luộc</p>
                          <p>· Gỏi bắp cải hoa chuối · Canh gà nấm</p>
                        </label>
                      </div>
                      <div>
                        <input id='friday' type='checkbox' />
                        <label htmlFor='friday'>
                          <p>Thứ 6 · Thịt viên sốt nấm đông cô</p>
                          <p>· Đậu cove xào tỏi · Canh bắp cải nấu thịt</p>
                        </label>
                      </div>
                      <div className='lunchlist-pickdayformtotal'>
                        <p>Tổng cộng</p>
                        <p>
                          <span>{price.toLocaleString()}</span>
                          <span> đ/tuần</span>
                        </p>
                      </div>
                      <div className='lunchlist-pickdayformbtn'>
                        <button onClick={() => setShowPickDay(false)}>Huỷ</button>
                        <button>Xác nhận</button>
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
                        Cá diêu hồng <br /> nướng sả
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Cải thìa sốt <br /> dầu hào
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh đậu hủ <br /> giá hẹ
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
                        Trứng cút <br /> sốt chua ngọt
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Rau củ xào <br /> nấm
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh rau dền <br /> nấu nấm rơm
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
                        Chả cá <br /> kho cà
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Rau củ <br /> luộc
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh đậu hủ <br /> rong biển
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
                        Thịt gà <br /> luộc
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Gỏi bắp cải <br /> hoa chuối
                      </p>
                      .....
                      <p className='lunchlist-submeal2'>
                        Canh gà <br /> nấm
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
                        Thịt viên sốt <br /> nấm đông cô
                      </h5>
                      .....
                      <p className='lunchlist-submeal1'>
                        Đậu cove <br /> xào tỏi
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
                      <button onClick={decreaseMeal}>-</button>
                      <span className='lunchlist-quantitypart'>{mealQuantity}</span>
                      <button onClick={increaseMeal}>+</button>
                      <span className='lunchlist-part'>Phần</span>
                    </div>
                    <div className='lunchlist-tools'>
                      <div className='lunchlist-morerice'>
                        <div>
                          <input type='checkbox' id='morerice' />
                          <label htmlFor='morerice'>Cơm thêm</label>
                        </div>
                        <div>
                          <span>+ 2.000 </span>
                          <span>đ/ngày</span>
                        </div>
                      </div>
                      <div className='lunchlist-spoonchopstick'>
                        <div>
                          <input type='checkbox' id='spoonchopstick' />
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
                      <input type='checkbox' id='blackcoffee' />
                      <label htmlFor='blackcoffee'>Cafe đen</label>
                    </div>
                    <div>
                      <span>+ 10.000 </span>
                      <span>đ/ngày</span>
                    </div>
                  </div>
                  <div className='lunchlist-lemontea'>
                    <div>
                      <input type='checkbox' id='lemontea' />
                      <label htmlFor='lemontea'>Trà chanh</label>
                    </div>
                    <div>
                      <span>+ 10.000 </span>
                      <span>đ/ngày</span>
                    </div>
                  </div>
                  <div className='lunchlist-milkcoffee'>
                    <div>
                      <input type='checkbox' id='milkcoffee' />
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
                      {price !== undefined ? <span className='lunchlist-total'>{price.toLocaleString()}</span> : ""}
                      <span> đ/tuần</span>
                    </p>
                  </div>
                  <div className='lunchlist-btnaddorder'>
                    <button className='lunchlist-btnadd' onClick={() => addCart(id)}>
                      Thêm vào giỏ hàng
                    </button>
                    <button className='lunchlist-btnorder'>Đặt ngay</button>
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

export default MealNo4;
