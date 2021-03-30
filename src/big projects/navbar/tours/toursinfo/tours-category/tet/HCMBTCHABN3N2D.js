import React from "react";
import { Link } from "react-router-dom";
import { tetTanSuu } from "../../../listTours";
import { useGlobalContext } from "../../../../../context";

// Components
import NavbarTours from "../../../NavbarTours";
import FooterTop from "../../../FooterTop";
import FooterBottom from "../../../FooterBottom";
import TailorTour from "./TailorTour";
import "./tet.css";

import hinh1 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMBTCHABN3N2D/ivivu-cau-rong-da-nang-bia-750x390.jpg";
import hinh2 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMBTCHABN3N2D/ivivu-bao-tang-cham-da-nang.gif";
import hinh3 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMBTCHABN3N2D/ivivu-tour-da-nang-1n-ngu-hanh-son-hoi-an-ngu-hanh-son.jpg";
import hinh4 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMBTCHABN3N2D/ivivu-tour-da-nang-1n-hoi-an-thanh-dia-my-son-chua-cau-nhat-ban.jpg";
import hinh5 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMBTCHABN3N2D/ivivu-cap-treo-ba-na-dn.gif";
import hinh6 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMBTCHABN3N2D/ivivu-cau-ban-tay-vang.jpg";
import hinh7 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMBTCHABN3N2D/ivivu-bien-my-khe.jpg";
import hinh8 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMBTCHABN3N2D/ivivu-ban-dao-son-tra.jpg";
import hinh9 from "../../../../../img/tourslist/tetTanSuu/specificDestination/HCMBTCHABN3N2D/ivivu-bao-tang-da-nang.gif";

const HCMBTCHABN3N2D = () => {
  const HCMtoBTCHABN3N2D = tetTanSuu.find(
    tour => tour.to === "tour-cao-cap-da-nang-3n2d-hcm-bao-tang-cham-hoi-an-ba-na-tet",
  );
  const { to, name, price } = HCMtoBTCHABN3N2D;

  const {
    showTableDay0403,
    setShowTable0403,
    showTableDay1103,
    setShowTable1103,
    showTableDay1803,
    setShowTable1803,
    numberAdult,
    setNumberAdult,
    numberChildren,
    setNumberChildren,
    requireOrWatch,
    setRequireOrWatch,
    showPriceAndTotal,
    setShowPriceAndTotal,
    showPriceChildren,
    setShowPriceChildren,
    listAge,
    selectAge,
    setSelectAge,
    showSingleRoom,
    setShowSingleRoom,
    firstTerm,
    setFirstTerm,
    secondTerm,
    setSecondTerm,
    thirdTerm,
    setThirdTerm,
    fourthTerm,
    setFourthTerm,
  } = useGlobalContext();

  // Show Table Booking
  const handleClickPlus0403 = () => {
    setShowTable0403(false);
    setShowTable1103(true);
    setShowTable1803(true);
  };
  const handleClickPlus1103 = () => {
    setShowTable0403(true);
    setShowTable1103(false);
    setShowTable1803(true);
  };
  const handleClickPlus1803 = () => {
    setShowTable0403(true);
    setShowTable1103(true);
    setShowTable1803(false);
  };

  // Close Table booking
  const handleClickMinus0403 = () => {
    setShowTable0403(true);
    setRequireOrWatch("Yêu cầu đặt");
    setShowPriceAndTotal(true);
    if (numberChildren !== 0) {
      setShowPriceChildren(true);
    }
  };
  const handleClickMinus1103 = () => {
    setShowTable1103(true);
    setRequireOrWatch("Yêu cầu đặt");
    setShowPriceAndTotal(true);
    if (numberChildren !== 0) {
      setShowPriceChildren(true);
    }
  };
  const handleClickMinus1803 = () => {
    setShowTable1803(true);
    setRequireOrWatch("Yêu cầu đặt");
    setShowPriceAndTotal(true);
    if (numberChildren !== 0) {
      setShowPriceChildren(true);
    }
  };

  const handleClickSelect = () => {
    setShowPriceAndTotal(false);
    setShowPriceChildren(false);
    setRequireOrWatch("Xem gia");
  };
  // Add-Remove List age
  const addListAge = index => {
    listAge.push(
      <select
        onClick={handleClickSelect}
        onChange={e => setSelectAge(e.target.value)}
        className="tourtet-selectlist"
        key={index}
        name="price"
      >
        <option value="250.000">1</option>
        <option value="2.590.000">2</option>
        <option value="2.590.000">3</option>
        <option value="2.590.000">4</option>
        <option value="5.490.000">5</option>
        <option value="5.490.000">6</option>
        <option value="5.490.000">7</option>
        <option value="5.490.000">8</option>
        <option value="5.490.000">9</option>
        <option value="6.490.000">10</option>
        <option value="6.490.000">11</option>
      </select>,
    );
  };
  const removeListAge = () => {
    listAge.pop();
  };
  // Increase-Decrease quantity People
  const increaseAdult = () => {
    if (numberAdult >= 100) {
      setNumberAdult(100);
    } else {
      setNumberAdult(numberAdult + 1);
      setRequireOrWatch("Xem gia");
      setShowPriceAndTotal(false);
      setShowSingleRoom(false);
    }
  };
  const decreaseAdult = () => {
    if (numberAdult <= 1) {
      setNumberAdult(1);
    } else {
      setNumberAdult(numberAdult - 1);
      setRequireOrWatch("Xem gia");
      setShowPriceAndTotal(false);
      setShowSingleRoom(false);
    }
  };

  const increaseChildren = () => {
    if (numberChildren >= 10) {
      setNumberChildren(10);
    } else {
      setNumberChildren(numberChildren + 1);
      setRequireOrWatch("Xem gia");
      setShowPriceAndTotal(false);
      setShowPriceChildren(false);
      setShowSingleRoom(false);
      addListAge(numberChildren);
    }
  };
  const decreaseChildren = () => {
    if (numberChildren <= 0) {
      setNumberChildren(0);
    } else {
      setNumberChildren(numberChildren - 1);
      setRequireOrWatch("Xem gia");
      setShowPriceAndTotal(false);
      setShowPriceChildren(false);
      setShowSingleRoom(false);
      removeListAge();
    }
  };
  // handleClickRequireOrWatch
  const handleClickRequireOrWatch = () => {
    setRequireOrWatch("Yêu cầu đặt");
    setShowPriceAndTotal(true);
    setShowPriceChildren(true);
    if (numberAdult === 1) {
      setShowSingleRoom(true);
    }
    if (numberAdult === 1 && numberChildren !== 0) {
      setShowSingleRoom(false);
    }
    if (numberAdult === 1 && numberChildren === 0) {
      setShowPriceChildren(false);
    }
    if (numberChildren === 0) {
      setShowPriceChildren(false);
    }
  };
  // Handle Total Price
  let total;
  if (numberAdult === 1 && numberChildren === 0) {
    total = price + 650000;
  } else {
    if (parseFloat(selectAge) < 100) {
      total = price * numberAdult + parseFloat(selectAge) * 1000000 * numberChildren;
    } else {
      total = price * numberAdult + parseFloat(selectAge) * 1000 * numberChildren;
    }
  }

  // Change Terms
  const handleChangeTerm1 = () => {
    setFirstTerm(true);
    setSecondTerm(false);
    setThirdTerm(false);
    setFourthTerm(false);
  };
  const handleChangeTerm2 = () => {
    setFirstTerm(false);
    setSecondTerm(true);
    setThirdTerm(false);
    setFourthTerm(false);
  };
  const handleChangeTerm3 = () => {
    setFirstTerm(false);
    setSecondTerm(false);
    setThirdTerm(true);
    setFourthTerm(false);
  };
  const handleChangeTerm4 = () => {
    setFirstTerm(false);
    setSecondTerm(false);
    setThirdTerm(false);
    setFourthTerm(true);
  };

  return (
    <>
      <NavbarTours />
      <div className="tourtet-container">
        <div className="grid wide">
          <div className="row">
            {/* Breadcrumbs */}
            <nav className="col l-12 m-12 c-12">
              <ul className="tourtet-navbar">
                <li className="tourtet-item">
                  <Link className="tourtet-link" to="/du-lich">
                    <i className="fas fa-home"></i>
                    <span>Trang chủ</span>
                  </Link>
                </li>
                <li className="tourtet-item">
                  <Link className="tourtet-link" to="/phu-yen">
                    <span>Đà Nẵng</span>
                  </Link>
                </li>
                <li className="tourtet-item">
                  <Link className="tourtet-choose" to={`${to}`}>
                    <span>{name}</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Name and Rating */}
            <div className="col l-12 m-12 c-12">
              <h1 className="tourtet-name">{name}</h1>
            </div>

            {/* Infomation */}
            <div className="col l-8 m-12 c-12">
              <div className="tourtet-content">
                <img src={hinh1} alt="Đà Nẵng" className="tourtet-img" />
                <div className="tourtet-info">
                  <div>
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                      Hồ Chí Minh
                    </span>
                    <span>
                      <i className="fas fa-clock"></i>3 Ngày 2 Đêm
                    </span>
                    <span>
                      Phương tiện:
                      <i className="fas fa-plane"></i>
                      <i className="fas fa-bus"></i>
                    </span>
                  </div>
                  <span className="tourtet-code">
                    Mã Tour: <b>TO1426</b>
                  </span>
                </div>
                <div className="tourtet-description">
                  <div className="tourtet-journey">
                    <div className="tourtet-title">
                      <h2>Đà Nẵng - Vùng Đất Miền Trung Đáng Sống</h2>
                      <div className="tourtet-likeshare">
                        <button>Thích</button>
                        <button>Chia sẻ</button>
                      </div>
                    </div>
                    <p>
                      Đà Nẵng là một trong 20 thành phố sạch nhất thế giới. Nằm ở vùng Nam Trung Bộ, Đà Nẵng có cả núi,
                      đồng bằng và biển. Các điểm tham quan du lịch nổi tiếng khi du lịch Đà Nẵng bao gồm khu du lịch Bà
                      Nà, bãi biển Mỹ Khê, và khu vui chơi giải trí trong nhà Fantasy Park lớn nhất châu Á. Đà Nẵng còn
                      có nhiều thắng cảnh mê hồn như đèo Hải Vân, rừng nguyên sinh ở bán đảo Sơn Trà và Ngũ Hành Sơn.
                      Cùng iVIVU khám phá ngay hôm nay!
                    </p>
                  </div>

                  <div className="tourtet-experiences">
                    <h2>Những trải nghiệm thú vị trong chương trình</h2>
                    <div>
                      <p>Đà Nẵng nổi bật lên giữa miền Trung bởi:</p>
                      <p>
                        - <strong>Ngũ Hành Sơn</strong> hay núi Non Nước là một thắng cảnh nổi tiếng, trong ký ức của
                        nhiều người đây còn là vùng “địa linh” của xứ Quảng xưa nay.
                      </p>
                      <p>
                        - <strong>Phố cổ Hội An</strong> như một bức tranh mộc mạc, giản dị và nên thơ, từng là một
                        thương cảng quốc tế sầm uất, đã được UNESCO công nhận là di sản văn hóa thế giới năm 1999.
                      </p>
                      <p>
                        - <strong>Bà Nà Núi Chúa</strong>: khu nghỉ dưỡng trên đỉnh núi xinh đẹp như bao trọn toàn bộ
                        các dịch vụ vui chơi, giải trí cả nước nơi đây.
                      </p>
                    </div>
                  </div>

                  <div className="tourtet-schedule">
                    <h2 id="1">Chương trình tour</h2>
                    <div className="tourtet-firstday">
                      <h3>NGÀY 01: TP.HCM – ĐÀ NẴNG – BẢO TÀNG CHĂM - NGŨ HÀNH SƠN - HỘI AN ( ĂN TRƯA, TỐI)</h3>
                      <p>
                        Nhân viên công ty đón khách tại sân bay <b> Tân Sơn Nhất</b> làm thủ tục bay <b> Đà Nẵng</b>.
                      </p>
                      <p>
                        Tới Đà Nẵng, xe và hướng dẫn viên đưa đoàn đi thăm quan <b>Bảo Tàng Chàm</b> – Bảo tàng được
                        đánh giá là Bảo Tàng có giá trị hàng đầu thế giới.
                      </p>
                      <img src={hinh2} alt="Bảo Tàng Chăm Đà Nẵng." />
                      <p>
                        Khởi hành đi ăn trưa tại nhà hang địa phương. Ăn trưa nhà hàng. Sau đó về khách sạn nhận phòng.
                      </p>
                      <p>
                        Buổi chiều: đi tham quan Khu di tích – danh thắng Ngũ Hành Sơn (khám phá các hang động, viếng
                        những ngôi chùa thiêng), Làng Nghề Điêu Khắc Đá và biển Non Nước.
                      </p>
                      <img src={hinh3} alt="Ngũ Hành Sơn." />
                      <p>
                        Quý khách bách bộ tham quan & mua sắm tại <b>Phố Cổ Hội An</b>: Chùa cầu Nhật Bản, bảo tàng văn
                        hóa Sa Huỳnh, nhà Cổ hàng trăm năm tuổi, hội quán Phước Kiến.
                      </p>
                      <img src={hinh4} alt="Chùa Cầu Nhật Bản." />
                      <p>
                        17h00: Khách về lại Đà Nẵng. Ăn tối. Về khách sạn 4 sao nhận phòng nghỉ. Tối tự do khám phá
                        thành phố về đêm.
                      </p>
                    </div>
                    <div className="tourtet-secondday">
                      <h3>NGÀY 02: BÀ NÀ – ĐÀ NẴNG - TẶNG VÉ BÀ NÀ + ĂN TRƯA BUFFET BÀ NÀ (ĂN SÁNG, TRƯA)</h3>
                      <p>7h00: Qúy khách dùng điểm tâm sáng tại khách sạn.</p>
                      <p>
                        Sau khi dùng bữa sáng đoàn khởi hành đi khu du lịch <b>Bà Nà – Núi Chúa</b>. Nơi mà quý khách
                        khám phá những khoảnh khắc giao mùa bất ngờ Xuân – Hạ - Thu – Đông trong 1 ngày.
                      </p>
                      <img src={hinh5} alt="Cap Treo Lên Bà Nà." />
                      <p>Ngồi cáp treo dài nhất thế giới (gần 6.000m), tham quan:</p>
                      <p>
                        - <b>Đồi Vọng Nguyệt, chùa Linh Ứng, Thích Ca Phật Đài, Cầu Vàng</b> và chinh phục đỉnh núi Chúa
                        ở độ cao 1.487m so với mực nước biển để thưởng thức quang cảnh núi rừng Bà Nà và toàn cảnh Đà
                        Nẵng trên cao.
                      </p>
                      <img src={hinh6} alt="Cầu Vàng." />
                      <p>
                        - Tham gia các trò chơi phiêu lưu mới lạ, ngộ nghĩnh, hấp dẫn, hiện đại như vòng quay tình yêu,
                        Phi công Skiver, Đường đua lửa, Xe điện đụng, Ngôi nhà ma...
                      </p>
                      <p>Ăn trưa tại nhà hàng BUFFET tại Bà Nà.</p>
                      <p>
                        Buổi chiều: quý khách tắm biển <b>Mỹ Khê</b> – một trong 06 bãi biển quyến rũ nhất hành tinh.
                      </p>
                      <img src={hinh7} alt="Biển Mỹ Khê." />
                      <p>Ăn tối tự túc. Tối quý khách tự do khám phá Phố Biển Đà Nẵng về đêm.</p>
                    </div>
                    <div className="tourtet-thirdday">
                      <h3>NGÀY 03: SƠN TRÀ – MUA SẮM - TIỄN KHÁCH VỀ TP.HCM (ĂN SÁNG, ĂN TRƯA)</h3>
                      <p>6h30: Qúy khách dùng Điểm tâm sáng tại khách sạn.</p>
                      <p>
                        Đoàn Tham quan <b>Bán đảo Sơn Trà (Monkey Moutain)</b> – quý khách sẽ có dịp thưởng ngoạn thành
                        phố Đà Nẵng từ trên cao khi xe chạy quanh 1 vòng bán đảo, Viếng Linh Ứng Tự - nơi có tượng Phật
                        Bà Quán Thế Âm cao 65m (cao nhất Việt Nam).
                      </p>
                      <img src={hinh8} alt="Bán Đảo Sơn Trà." />
                      <p>
                        Tiếp tục thăm quan Bảo Tàng Đà Nẵng: hiện nay được xây dựng với tổng diện tích khoảng 6000 m2,
                        nằm trong khuôn viên thành Điện Hải, di tích lịch sử nơi Nguyễn Tri Phương chặn những bước chân
                        xâm lược đầu tiên của thực dân Pháp vào Việt Nam năm 1858.
                      </p>
                      <img src={hinh9} alt="Bảo Tàng Đà Nẵng." />
                      <p>
                        Sau đó xe đưa du khách đi mua sắm đặc sản, Về lại khách sạn. Check out. Ăn trưa tại nhà hàng địa
                        phương. Đáp chuyến bay về lại Thành Phố Hồ Chí Minh.
                      </p>
                      <p>Kết thúc chương trình. Tạm biệt và hẹn gặp lại!</p>
                      <i>
                        Thứ tự tham quan có thể thay đổi nhưng vẫn bảo đảm đầy đủ điểm tham quan có trong chương trình.
                      </i>
                    </div>
                    <div id="2" className="tourtet-tailortour">
                      <TailorTour />
                    </div>
                    <div className="tourtet-departureschedule">
                      <div className="tourtet-departureschedule-title">
                        <h2 id="3">Lịch khởi hành</h2>
                      </div>

                      <div className="tourtet-departureschedule-table">
                        <div className="tourtet-departureschedule-title">
                          <span>Ngày khởi hành</span>
                          <span>Ngày về</span>
                          <span>Tình trạng</span>
                          <span>Giá</span>
                        </div>

                        <div
                          className={`tourtet-departureschedule-1403 ${
                            !showTableDay0403 && "tourtet-departureschedule-1403minus"
                          }`}
                        >
                          <span>T6, 19/03/2021</span>
                          <span>CN, 21/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay0403 ? (
                              <>
                                5.990.000 VND
                                <i onClick={handleClickPlus0403} className="fas fa-plus-circle"></i>
                              </>
                            ) : (
                              <i
                                onClick={handleClickMinus0403}
                                className={`fas fa-minus-circle  ${
                                  showTableDay0403 ? "tourtet-plus1403" : "tourtet-minus1403"
                                }`}
                              ></i>
                            )}
                          </span>
                        </div>
                        {!showTableDay0403 && (
                          <div className="tourtet-departureschedule-table-adultchildren">
                            <div className="tourtet-departureschedule-tableadult">
                              <span className="tourtet-departureschedule-adult">Người lớn</span>
                              {showPriceAndTotal && (
                                <span className="tourtet-departureschedule-price">x {price.toLocaleString()}</span>
                              )}
                              <div className="tourtet-numberAdult">
                                <button onClick={decreaseAdult}>-</button>
                                <span className="numberadult">{numberAdult}</span>
                                <button onClick={increaseAdult}>+</button>
                              </div>
                              {showPriceAndTotal && (
                                <div className="tourtet-total">
                                  <span>{total.toLocaleString()}</span>
                                  <span>VND</span>
                                </div>
                              )}
                              <button
                                onClick={handleClickRequireOrWatch}
                                className="tourtet-departureschedule-tablebtn"
                              >
                                {requireOrWatch}
                              </button>
                            </div>
                            <div className="tourtet-departureschedule-tablechildren">
                              <span className="tourtet-departureschedule-children">Trẻ em</span>
                              {showPriceChildren && (
                                <span className="tourtet-departureschedule-pricechildren">x {selectAge}</span>
                              )}
                              <div className="tourtet-numberChildren">
                                <button onClick={decreaseChildren}>-</button>
                                <span className="numberchildren">{numberChildren}</span>
                                <button onClick={increaseChildren}>+</button>
                              </div>
                            </div>
                            {showSingleRoom && (
                              <div className="tourtet-singleroom">
                                <span>Phụ thu phòng đơn</span>
                                <span>650.000 VND</span>
                              </div>
                            )}
                            <div className={`${listAge.length > 0 && "tourtet-listage"}`}>
                              {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                              {listAge.map(age => age)}
                            </div>
                            <div className="tourtet-totalbtn-mobile">
                              <p>{total.toLocaleString()}</p>
                              <button onClick={handleClickRequireOrWatch}>{requireOrWatch}</button>
                            </div>
                          </div>
                        )}

                        <div
                          className={`tourtet-departureschedule-1703 ${
                            !showTableDay1103 && "tourtet-departureschedule-1703minus"
                          }`}
                        >
                          <span>T7, 20/03/2021</span>
                          <span>T2, 22/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay1103 ? (
                              <>
                                5.990.000 VND
                                <i onClick={handleClickPlus1103} className="fas fa-plus-circle"></i>
                              </>
                            ) : (
                              <i
                                onClick={handleClickMinus1103}
                                className={`fas fa-minus-circle  ${
                                  showTableDay1103 ? "tourtet-plus1703" : "tourtet-minus1703"
                                }`}
                              ></i>
                            )}
                          </span>
                        </div>
                        {!showTableDay1103 && (
                          <div className="tourtet-departureschedule-table-adultchildren">
                            <div className="tourtet-departureschedule-tableadult">
                              <span className="tourtet-departureschedule-adult">Người lớn</span>
                              {showPriceAndTotal && (
                                <span className="tourtet-departureschedule-price">x {price.toLocaleString()}</span>
                              )}
                              <div className="tourtet-numberAdult">
                                <button onClick={decreaseAdult}>-</button>
                                <span className="numberadult">{numberAdult}</span>
                                <button onClick={increaseAdult}>+</button>
                              </div>
                              {showPriceAndTotal && (
                                <div className="tourtet-total">
                                  <span>{total.toLocaleString()}</span>
                                  <span>VND</span>
                                </div>
                              )}
                              <button
                                onClick={handleClickRequireOrWatch}
                                className="tourtet-departureschedule-tablebtn"
                              >
                                {requireOrWatch}
                              </button>
                            </div>
                            <div className="tourtet-departureschedule-tablechildren">
                              <span className="tourtet-departureschedule-children">Trẻ em</span>
                              {showPriceChildren && (
                                <span className="tourtet-departureschedule-pricechildren">x {selectAge}</span>
                              )}
                              <div className="tourtet-numberChildren">
                                <button onClick={decreaseChildren}>-</button>
                                <span className="numberchildren">{numberChildren}</span>
                                <button onClick={increaseChildren}>+</button>
                              </div>
                            </div>
                            {showSingleRoom && (
                              <div className="tourtet-singleroom">
                                <span>Phụ thu phòng đơn</span>
                                <span>1.000.000 VND</span>
                              </div>
                            )}
                            <div className={`${listAge.length > 0 && "tourtet-listage"}`}>
                              {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                              {listAge.map(age => age)}
                            </div>
                            <div className="tourtet-totalbtn-mobile">
                              <p>{total.toLocaleString()}</p>
                              <button onClick={handleClickRequireOrWatch}>{requireOrWatch}</button>
                            </div>
                          </div>
                        )}

                        <div
                          className={`tourtet-departureschedule-2403 ${
                            !showTableDay1803 && "tourtet-departureschedule-2403minus"
                          }`}
                        >
                          <span>T6, 26/03/2021</span>
                          <span>CN, 28/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay1803 ? (
                              <>
                                5.990.000 VND
                                <i onClick={handleClickPlus1803} className="fas fa-plus-circle"></i>
                              </>
                            ) : (
                              <i
                                onClick={handleClickMinus1803}
                                className={`fas fa-minus-circle  ${
                                  showTableDay1803 ? "tourtet-plus2403" : "tourtet-minus2403"
                                }`}
                              ></i>
                            )}
                          </span>
                        </div>
                        {!showTableDay1803 && (
                          <div className="tourtet-departureschedule-table-adultchildren">
                            <div className="tourtet-departureschedule-tableadult">
                              <span className="tourtet-departureschedule-adult">Người lớn</span>
                              {showPriceAndTotal && (
                                <span className="tourtet-departureschedule-price">x {price.toLocaleString()}</span>
                              )}
                              <div className="tourtet-numberAdult">
                                <button onClick={decreaseAdult}>-</button>
                                <span className="numberadult">{numberAdult}</span>
                                <button onClick={increaseAdult}>+</button>
                              </div>
                              {showPriceAndTotal && (
                                <div className="tourtet-total">
                                  <span>{total.toLocaleString()}</span>
                                  <span>VND</span>
                                </div>
                              )}
                              <button
                                onClick={handleClickRequireOrWatch}
                                className="tourtet-departureschedule-tablebtn"
                              >
                                {requireOrWatch}
                              </button>
                            </div>
                            <div className="tourtet-departureschedule-tablechildren">
                              <span className="tourtet-departureschedule-children">Trẻ em</span>
                              {showPriceChildren && (
                                <span className="tourtet-departureschedule-pricechildren">x {selectAge}</span>
                              )}
                              <div className="tourtet-numberChildren">
                                <button onClick={decreaseChildren}>-</button>
                                <span className="numberchildren">{numberChildren}</span>
                                <button onClick={increaseChildren}>+</button>
                              </div>
                            </div>
                            {showSingleRoom && (
                              <div className="tourtet-singleroom">
                                <span>Phụ thu phòng đơn</span>
                                <span>650.000 VND</span>
                              </div>
                            )}
                            <div className={`${listAge.length > 0 && "tourtet-listage"}`}>
                              {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                              {listAge.map(age => age)}
                            </div>
                            <div className="tourtet-totalbtn-mobile">
                              <p>{total.toLocaleString()}</p>
                              <button onClick={handleClickRequireOrWatch}>{requireOrWatch}</button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="tourtet-accompanyservices">
                      <h2 id="4">Dịch vụ đi kèm</h2>

                      <div className="tourtet-accompanyservices-list">
                        <div className="tourtet-accompanyservices-top">
                          <span>
                            <i className="fas fa-check"></i>
                            Bảo hiểm
                          </span>
                          <span>
                            <i className="fas fa-utensils"></i>
                            Bữa ăn
                          </span>
                          <span>
                            <i className="fas fa-flag"></i>
                            Hướng dẫn viên
                          </span>
                        </div>

                        <div className="tourtet-accompanyservices-bottom">
                          <span>
                            <i className="fas fa-ticket-alt"></i>
                            Vé tham quan
                          </span>
                          <span>
                            <i className="fas fa-bus"></i>
                            Xe đưa đón
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="tourtet-expensepolicy">
                      <h2>Chính sách phụ thu</h2>
                      <div className="tourtet-expensepolicy-list">
                        <p>- Phụ thu phòng đơn: 650.000 vnđ/khách/tour.</p>
                        <p>
                          - Trẻ em dưới 02 tuổi: 30% giá người lớn. Cha, Mẹ hoặc người thân đi kèm tự lo các chi phí ăn,
                          ngủ, tham quan (nếu có) cho bé.
                        </p>
                        <p>
                          - Trẻ em từ 02 – dưới 12 tuổi: 85% giá người lớn, ngủ chung với bố mẹ. Hai người lớn chỉ được
                          kèm 1 trẻ em, trẻ em thứ 2 trở lên Cha Mẹ mua thêm 1 suất giường đơn như giá người lớn.
                        </p>
                        <p>- Trẻ em từ 10 tuổi trở lên mua vé như người lớn</p>
                      </div>
                    </div>

                    <div className="tourtet-terms">
                      <h2>Điều khoản</h2>
                      <div className="tourtet-terms-list">
                        <span
                          onClick={handleChangeTerm1}
                          className={`${firstTerm ? "tourtet-terms-active" : ""} tourtet-firstterm`}
                        >
                          Bao Gồm
                        </span>
                        <span
                          onClick={handleChangeTerm2}
                          className={`${secondTerm ? "tourtet-terms-active" : ""} tourtet-secondterm`}
                        >
                          Không Bao Gồm
                        </span>
                        <span
                          onClick={handleChangeTerm3}
                          className={`${thirdTerm ? "tourtet-terms-active" : ""} tourtet-thirdterm`}
                        >
                          Hủy Đổi
                        </span>
                        <span
                          onClick={handleChangeTerm4}
                          className={`${fourthTerm ? "tourtet-terms-active" : ""} tourtet-fourthterm`}
                        >
                          Lưu ý
                        </span>
                        {firstTerm && (
                          <div className="tourtet-firstterm-list">
                            <div>
                              <u>Vận chuyển:</u>
                              <p>
                                - Vé máy bay khứ hồi TP.HCM – Đà Nẵng – TP.HCM (Pacific Airlines bao gồm 7kg xách tay và
                                20kg ký gửi).
                              </p>
                              <p>
                                - Xe tham quan (xe 16 chỗ, 29 chỗ, 35 chỗ, 45 chỗ) tùy theo số lượng khách thực tế trên
                                chuyến đi.
                              </p>
                            </div>
                            <div>
                              <u>Lưu trú:</u>
                              <p>
                                - Khách sạn 4* đầy đủ tiện nghi 2 khách người lớn/ phòng. Nếu lẻ người thứ 3, đóng phụ
                                phí phòng đơn hoặc ngủ ghép phòng 3 khách.
                              </p>
                              <p>- Các bữa ăn theo chương trình.</p>
                              <p>- Vé tham quan theo chương trình.</p>
                              <p>- Hướng dẫn viên chuyên nghiệp vui vẻ nhiệt tình.</p>
                              <p>- Quà tặng: nón du lịch.</p>
                              <p>- Bảo hiểm với mức bồi thường tối đa 30.000.000 đồng/trường hợp.</p>
                            </div>
                          </div>
                        )}
                        {secondTerm && (
                          <div className="tourtet-secondterm-list">
                            <p>- Bia hay nước ngọt trong các bữa ăn.</p>
                            <p>- Chi phí cá nhân: điện thoại, giặt ủi...</p>
                            <p>- Thuế VAT</p>
                            <p>- Chi Phí cap treo Bà Nà.</p>
                            <p>- Chi phí phụ thu phòng đơn.</p>
                          </div>
                        )}
                        {thirdTerm && (
                          <div className="tourtet-thirdterm-list">
                            <b>Chính sách hủy:</b>
                            <p>
                              Mọi sự thay đổi liên quan đến vé đã xuất: ngày giờ đi, tên hành khách, hủy vé, quý khách
                              vui lòng chịu chi phí theo qui định sau:
                            </p>
                            <p>- Ngay sau khi đặt cọc hoặc thanh toán hoặc trước 30 ngày: phí hủy 35% tổng giá tour.</p>
                            <p>- Hủy từ 15 - 29 ngày trước ngày khởi hành: phí hủy 70% tổng giá tour.</p>
                            <p>- Hủy từ 07 - 14 ngày trước ngày khởi hành: phí hủy 100% tổng giá tour.</p>
                            <p>
                              - Việc huỷ bỏ chuyến đi phải được thông báo trực tiếp với Công ty hoặc qua fax, email, tin
                              nhắn và phải được Công ty xác nhận. Việc huỷ bỏ bằng điện thoại không được chấp nhận.
                            </p>
                            <p>- Các ngày đặt cọc, thanh toán, huỷ và dời tour: không tính thứ 7, Chủ Nhật.</p>
                            <b>Chính sách đổi:</b>
                            <p>
                              - Sau khi đăng ký, thanh toán ít nhất 50% tiền cọc và đóng hết 100% trước khởi hành 15
                              ngày. Khi đến ngày thanh toán đủ 100% tổng giá trị tiền tour, nếu Quý khách không thanh
                              toán đúng hạn và đúng số tiền được xem như Quý khách tự ý huỷ tour và mất hết số tiền đã
                              đặt cọc giữ chỗ.
                            </p>
                            <p>
                              - Khi đăng ký tour khách hàng bắt buộc phải gởi giấy tờ tùy thân cho đơn vị du lịch để vào
                              tên xuất vé và mua bảo hiểm du lịch. Những giấy tờ cá nhân của khách hàng (CMND hoặc
                              Passport) thuộc về trách nhiệm của khách hàng. Mọi vấn đề như hình ảnh, thông tin giấy tờ
                              trong bản gốc bị mờ, không rõ ràng; Passport, CMND hết hạn,…không đúng quy định của pháp
                              luật Việt Nam, Du Lịch Viêt Nam TravelMart sẽ không chịu trách nhiệm và sẽ không hoàn trả
                              bất cứ chi phí phát sinh nào.
                            </p>
                            <p>
                              - Khi đăng ký tour du lịch, Quý khách vui lòng đọc kỹ chương trình, giá tour, các khoản
                              bao gồm cũng như không bao gồm, các điều kiện hủy tour trong chương trình. Trong trường
                              hợp Quý khách không trực tiếp đến đăng ký tour mà do người khác đến đăng ký thì Quý khách
                              vui lòng tìm hiểu kỹ chương trình từ người đăng ký cho mình.
                            </p>
                            <p>
                              - Vé Máy Bay / vé xe lửa / vé tàu cao tốc được xuất ngay sau khi quý khách đăng ký, thanh
                              toán, xác nhận thông tin cá nhân (họ tên, ngày tháng năm sinh…) và có những điều kiện vé
                              như sau: Không được đổi tên, hoàn vé, hủy vé, thay đổi ngày, thay đổi hành trình.
                            </p>
                          </div>
                        )}
                        {fourthTerm && (
                          <div className="tourtet-fourthterm-list">
                            <p>
                              - Trẻ em (dưới 14 tuổi): Khi đi du lịch mang theo giấy khai sinh (bản chính hoặc sao y có
                              thị thực còn hạn sử dụng) để làm thủ tục hàng không.
                            </p>
                            <p>
                              - Quý khách từ 14 tuổi bắt buộc phải có CMND hoặc Passport (còn hạn sử dụng),
                              <b>KHÔNG SỬ DỤNG GIẤY KHAI SINH</b>. . Nếu trẻ em từ 14 tuổi chưa có CMND hoặc Passport
                              bắt buộc phải có Giấy xác nhận nhân thân (Có xác nhận chính quyền (còn hạn sử dụng)) +
                              Giấy khai sinh.
                            </p>
                            <p>
                              - Đối với khách Nước ngoài/Việt Kiều: Khi đi tour vui lòng mang theo hộ chiếu bản chính
                              (Passport) kèm thị thực nhập cảnh (visa) hoặc thẻ xanh kèm thị thực nhập cảnh (visa dán
                              vào hộ chiếu hoặc tờ rời hoặc cuốn miễn thị thực, các loại giấy tờ này phải có dấu nhập
                              cảnh Việt Nam và còn hạn sử dụng làm thủ tục lên máy bay theo qui định hàng không).
                            </p>
                            <p>
                              - Quý khách khi đăng ký cung cấp tên theo giấy tờ tùy thân nào, khi đi tour mang theo giấy
                              tờ tùy thân đó.
                            </p>
                            <i>Lưu ý khác:</i>
                            <p>
                              - Thông tin hành lý khi đi tour, xách tay dưới 7kg/1khách – kích thước không quá: 56cm x
                              36cm x 23 cm, chất lỏng với thể tích không quá 100ml. Ký gửi – kích thước không quá: 119cm
                              x 119cm x 81cm. Các vật phẩm không được chấp nhận dưới dạng hành lý ký gởi hoặc vận chuyển
                              trong hành lý theo quy định hàng không.
                            </p>
                            <p>
                              - Do tính chất là đoàn ghép khách lẻ, công ty du Lịch sẽ có trách nhiệm nhận khách đăng ký
                              cho đủ đoàn (10 khách người lớn trở lên) thì đoàn sẽ khởi hành đúng lịch trình. Nếu số
                              lượng đoàn dưới 10 khách, công ty có trách nhiệm thông báo cho khách trước ngày khởi hành
                              3 ngày và sẽ thỏa thuận lại ngày khởi hành mới hoặc hoàn trả toàn bộ số tiền đã đặt cọc
                              tour.
                            </p>
                            <p>
                              - Trong những trường hợp bất khả kháng như: khủng bố, bạo động, thiên tai, lũ lụt… Tuỳ
                              theo tình hình thực tế và sự thuận tiện, an toàn của khách hàng, công ty Du Lịch sẽ chủ
                              động thông báo cho khách hàng sự thay đổi như sau: huỷ hoặc thay thế bằng một chương trình
                              mới với chi phí tương đương chương trình tham quan trước đó. Trong trường hợp chương trình
                              mới có phát sinh thì Khách hàng sẽ thanh toán khoản phát sinh này. Tuy nhiên, mỗi bên có
                              trách nhiệm cố gắng tối đa, giúp đỡ bên bị thiệt hại nhằm giảm thiểu các tổn thất gây ra
                              vì lý do bất khả kháng...
                            </p>
                            <p>
                              - Đối với sự thay đổi lịch trình, giờ bay do lỗi của hãng hàng không, tàu hoả, tàu thuỷ,
                              công ty du lịch sẽ không chịu trách nhiệm bất kỳ phát sinh nào do lỗi trên như: phát sinh
                              bữa ăn, nhà hàng, khách sạn, phương tiện di chuyển, hướng dẫn viên...
                            </p>
                            <p>
                              - Do các chuyến bay phụ thuộc vào các hãng Hàng Không (Vietnam, Vietjet, Pacific
                              Airlines...) nên trong một số trường hợp giá vé, chuyến bay, giờ bay có thể thay đổi mà
                              không được báo trước.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Price */}
            <div className="col l-4 m-12 c-12">
              <div className="tourtet-right">
                <div className="tourtet-totalprice">
                  <p>Đặt ngay, chỉ 2 phút. Hoặc gọi (028) 3933 8002</p>
                  <div className="tourtet-totalprice-pickdaystart">
                    <span>Chọn ngày khởi hành:</span>
                  </div>
                  <div className="tourtet-totalprice-adult">
                    <span>Người lớn</span>
                    <div className="tourtet-totalprice-adultpricequantity">
                      {showPriceAndTotal && (
                        <span className="tourtet-totalprice-adultprice">x {price.toLocaleString()}</span>
                      )}
                      <div className="tourtet-totalprice-numberAdult">
                        <button onClick={decreaseAdult}>-</button>
                        <span className="totalprice-numberadult">{numberAdult}</span>
                        <button onClick={increaseAdult}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="tourtet-totalprice-children">
                    <span>Trẻ em</span>
                    <div className="tourtet-totalprice-childrenpricequantity">
                      {showPriceChildren && <span className="tourtet-totalprice-childrenprice">x {selectAge}</span>}
                      <div className="tourtet-totalprice-numberChildren">
                        <button onClick={decreaseChildren}>-</button>
                        <span className="totalprice-numberchildren">{numberChildren}</span>
                        <button onClick={increaseChildren}>+</button>
                      </div>
                    </div>
                  </div>
                  {showSingleRoom && (
                    <div className="tourtet-totalprice-singleroom">
                      <span>Phụ thu phòng đơn</span>
                      <span>650.000 VND</span>
                    </div>
                  )}
                  <div className={`${listAge.length > 0 && "tourtet-listage"}`}>
                    {listAge.length > 0 && <p className="tourtet-listage-title">Độ tuổi trẻ em</p>}
                    {listAge.map(age => age)}
                  </div>
                  <div className="tourtet-totalprice-totalandbtn">
                    {showPriceAndTotal && (
                      <p>
                        <span>{total.toLocaleString()}</span>
                        <span> VND</span>
                      </p>
                    )}
                    <button onClick={handleClickRequireOrWatch}>{requireOrWatch}</button>
                  </div>
                </div>
                <div className="tourtet-bookmark">
                  <a href="#1">CHƯƠNG TRÌNH TOUR</a>
                  <a href="#2">TRẢI NGHIỆM THEO CÁCH CỦA BẠN</a>
                  <a href="#3">LỊCH KHỞI HÀNH</a>
                  <a href="#4">ĐIỀU KHOẢN QUY ĐỊNH</a>
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

export default HCMBTCHABN3N2D;
