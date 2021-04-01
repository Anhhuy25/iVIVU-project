import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./lunch-list/lunchlist.css";
import "../../grid.css";

// Components
import NavbarEating from "./NavbarEating";
import FooterTop from "../tours/FooterTop";
import FooterBottom from "./FooterBottom";

const MealCart = () => {
  const styleRightBtn = {
    color: "#fff",
    backgroundColor: "#ec971f",
    border: "1px solid #ec971f",
    borderRadius: "4px",
    padding: "8px",
    cursor: "pointer",
    outline: "none",
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "12px",
    marginRight: "12px",
  };
  const styleLeftBtn = {
    color: "#fff",
    backgroundColor: "#ec971f",
    border: "1px solid #ec971f",
    borderRadius: "4px",
    padding: "8px",
    cursor: "pointer",
    outline: "none",
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "12px",
    marginLeft: "12px",
  };

  const { listCart, setListCart } = useGlobalContext();
  const [requireLocation, setRequireLocation] = useState(false);

  const removeItem = (id) => {
    const remove = listCart.filter((x) => x.id !== id);
    setListCart(remove);
  };
  const decItem = (id) => {
    const decrease = listCart.map((x) => {
      if (x.id === id && x.quantity > 1) {
        return { ...x, quantity: x.quantity - 1 };
      }
      return x;
    });
    setListCart(decrease);
  };
  const incItem = (id) => {
    const increase = listCart.map((x) => {
      if (x.id === id) {
        return { ...x, quantity: x.quantity + 1 };
      }
      return x;
    });
    setListCart(increase);
  };

  let total = listCart.reduce((cartTotal, cartItem) => {
    const { price, quantity } = cartItem;
    const itemTotal = price * quantity;
    cartTotal += itemTotal;
    return cartTotal;
  }, 0);

  return (
    <>
      <NavbarEating />
      {listCart.length === 0 ? (
        <div style={{ textAlign: "center", margin: "24px 0" }}>
          <p>
            <svg xmlns='http://www.w3.org/2000/svg' width='112' height='112' fill='none' viewBox='0 0 112 112'>
              <g clipPath='url(#prefix__clip0)'>
                <path
                  fill='#26BED6'
                  d='M111.186 18.76c-.665-.797-1.652-1.26-2.688-1.26H23.52c-1.085 0-2.114.505-2.78 1.366-.657.868-.881 1.988-.601 3.038l11.2 41.86c.413 1.54 1.799 2.596 3.38 2.596.056 0 .12 0 .175-.007l66.779-3.36c1.617-.084 2.975-1.267 3.269-2.863l7-38.5c.189-1.028-.091-2.078-.756-2.87z'
                />
                <path
                  fill='#FAFAFA'
                  d='M87.499 52.5c-1.932 0-3.5-1.568-3.5-3.5V35c0-1.931 1.568-3.5 3.5-3.5 1.931 0 3.5 1.569 3.5 3.5v14c0 1.932-1.569 3.5-3.5 3.5zM66.499 52.5c-1.932 0-3.5-1.568-3.5-3.5V35c0-1.931 1.568-3.5 3.5-3.5s3.5 1.569 3.5 3.5v14c0 1.932-1.568 3.5-3.5 3.5zM45.5 52.5c-1.933 0-3.5-1.568-3.5-3.5V35c0-1.931 1.567-3.5 3.5-3.5 1.931 0 3.5 1.569 3.5 3.5v14c0 1.932-1.569 3.5-3.5 3.5z'
                />
                <path
                  fill='#003C71'
                  d='M45.5 108.499c5.798 0 10.499-4.701 10.499-10.5s-4.701-10.5-10.5-10.5S35 92.2 35 98s4.701 10.5 10.5 10.5zM87.499 108.499c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5-10.5 4.701-10.5 10.5 4.701 10.5 10.5 10.5zM94.499 80.5h-56c-1.589 0-2.975-1.065-3.38-2.598L17.121 10.5H3.5C1.568 10.5 0 8.932 0 7s1.568-3.5 3.5-3.5h16.31c1.589 0 2.975 1.064 3.38 2.597L41.188 73.5H94.5c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5z'
                />
              </g>
              <defs>
                <clipPath id='prefix__clip0'>
                  <path fill='#fff' d='M0 0H112V112H0z' />
                </clipPath>
              </defs>
            </svg>
          </p>
          <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
          <p>Nhanh tay chọn ngay thực đơn hấp dẫn bên dưới</p>
          <Link to='/an-uong'>
            <button style={styleRightBtn}>Xem combo bữa trưa</button>
          </Link>
          <Link to='/bua-toi'>
            <button style={styleLeftBtn}>Xem nguyên liệu bữa tối</button>
          </Link>
        </div>
      ) : (
        <div className='grid wide'>
          <div className='row'>
            <div className='col l-9 m-12 c-12'>
              <div className='mealcart-container'>
                <h3>Giỏ hàng</h3>
                {listCart.map((item) => {
                  return (
                    <div key={item.id} className='mealcart-detail'>
                      <img src={item.mealImg} alt={item.mealName} className='mealcart-img' />
                      <div className='mealcart-name'>
                        <p>{item.mealName}</p>
                        <span>15.02 → 19.02</span>
                      </div>
                      <div className='mealcart-remainpart'>
                        <div className='mealcart-price'>
                          <span className='mealcart-pricenum'>{item.price.toLocaleString()}</span>
                          <span> đ/ {item.dayPerWeek >= 5 ? "tuần" : `${item.dayPerWeek} ngày`}</span>
                        </div>
                        <div className='mealcart-quantity'>
                          <button onClick={() => decItem(item.id)}>-</button>
                          <span className='mealcart-quantitynum'>{item.quantity}</span>
                          <button onClick={() => incItem(item.id)}>+</button>
                        </div>
                        <span className='mealcart-removebtn' onClick={() => removeItem(item.id)}>
                          Xoá
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='col l-3 m-12 c-12'>
              <div className='mealcart-orderprocess'>
                <div className='mealcart-total'>
                  <p>Thành tiền:</p>
                  <p>
                    <span className='mealcart-totalprice'>{total.toLocaleString()}</span>
                    <span> đ/tuần</span>
                  </p>
                </div>
                <button className='mealcart-orderbtn'>Tiến hàng đặt hàng</button>
              </div>
              <div className='mealcart-orderbtnmobile'>
                <button>Tiến hàng đặt hàng</button>
              </div>
              <div className='mealcart-delivery'>
                <p>Giao hàng miễn phí bữa trưa (11h15 - 12h00), bữa tối (16h00 - 17h00) hàng ngày tại các khu vực:</p>
                <p>
                  - Hồ Chí Minh: Quận 1, Quận 10, Quận 11, Quận 2, Quận 3, Quận 4, Quận 5, Quận 6, Quận 7, Quận 8, Quận
                  Bình Thạnh, Quận Gò Vấp, Quận Phú Nhuận, Quận Tân Bình, Quận Tân Phú.
                </p>
                <p>
                  Quý khách ngoài khu vực trên vui lòng để lại thông tin liên lạc, iVIVU sẽ cố gắng hỗ trợ Quý khách
                  trong thời gian sớm nhất.
                </p>
                <p onClick={() => setRequireLocation(true)}>
                  Yêu cầu giao khu vực khác
                  <i className='fas fa-angle-right'></i>
                </p>
              </div>
              {requireLocation && (
                <div className={`modal-overlay ${requireLocation ? "show-modal" : ""}`}>
                  <div className='lunchlist-sendrequire'>
                    <i onClick={() => setRequireLocation(false)} className='fas fa-times'></i>
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
          </div>
        </div>
      )}
      <div style={{ backgroundColor: "#f9f9f9", padding: "0 8px" }}>
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default MealCart;
