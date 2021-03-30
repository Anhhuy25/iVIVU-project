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

import hinh1 from "../../../../../img/tourslist/tetTanSuu/specificDestination/PTGolf/ivivu-lang-chai-mui-ne-bia-750x390.jpg";
import hinh2 from "../../../../../img/tourslist/tetTanSuu/specificDestination/PTGolf/ivivu-sealink-city.gif";
import hinh3 from "../../../../../img/tourslist/tetTanSuu/specificDestination/PTGolf/ivivu-sealink-golf.gif";
import hinh4 from "../../../../../img/tourslist/tetTanSuu/specificDestination/PTGolf/ivivu-nhac-nuoc-fishermen-show.gif";
import hinh5 from "../../../../../img/tourslist/tetTanSuu/specificDestination/PTGolf/ivivu-doi-cat-bay.gif";
import hinh6 from "../../../../../img/tourslist/tetTanSuu/specificDestination/PTGolf/ivivu-trung-tam-bun-khoang.gif";

const PTGolf = () => {
  const PTPlayGolf = tetTanSuu.find(
    tour => tour.to === "tour-cao-cap-phan-thiet-2n1d-danh-golf-cung-sealink-doi-cat-bay-tet",
  );
  const { to, name, price } = PTPlayGolf;

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
    total = price + 800000;
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
                    <span>Phan Thiết</span>
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
                <img src={hinh1} alt="Phan Thiết" className="tourtet-img" />
                <div className="tourtet-info">
                  <div>
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                      Hồ Chí Minh
                    </span>
                    <span>
                      <i className="fas fa-clock"></i>2 Ngày 1 Đêm
                    </span>
                    <span>
                      Phương tiện:
                      <i className="fas fa-bus"></i>
                    </span>
                  </div>
                  <span className="tourtet-code">
                    Mã Tour: <b>TO1444</b>
                  </span>
                </div>
                <div className="tourtet-description">
                  <div className="tourtet-journey">
                    <div className="tourtet-title">
                      <h2>Du Xuân Trải Nghiệm Sang Trọng</h2>
                      <div className="tourtet-likeshare">
                        <button>Thích</button>
                        <button>Chia sẻ</button>
                      </div>
                    </div>
                    <p>
                      Du lịch Phan Thiết từ trước đến nay luôn nổi tiếng với những bãi biển xanh trong và những đồi cát
                      trải dài tít tắp. Nếu đang tìm kiếm một chuyến nghỉ ngơi ngắn ngày đến một thành phố biển xinh đẹp
                      thì Phan Thiết là sự lựa chọn không thể tuyệt vời hơn. Một trong những điểm nhấn của sân Sea Links
                      là khu vực tập golf. Đây là một trong những sân tập tốt nhất Việt Nam với 22 vị trí tập đánh xa và
                      sân tập đánh ngắn, tập gạt có tầm nhìn bao quát vịnh Mũi Né. Sân golf Sea Links là một công trình
                      độc đáo với tầm nhìn hướng ra cảnh biển mênh mông, bao quanh là quần thể Sea Links City với những
                      tiện nghi đẳng cấp 5 sao tạo cảm giác thanh bình về một thiên đường golf và nghỉ dưỡng. Cùng iVIVU
                      khám phá ngay hôm nay!
                    </p>
                  </div>

                  <div className="tourtet-experiences">
                    <h2>Những trải nghiệm thú vị trong chương trình</h2>
                    <div>
                      <p>
                        Phan Thiết - thiên đường nghỉ dưỡng trong chuyến hành trình sẽ cho quý khách mang cảm giác hưởng
                        thụ, giải lao ngắn ngày trong 1 năm lao động mệt mỏi:
                      </p>
                      <p>
                        - <strong>Sea Links Golf & Country Club</strong>: là nơi hội tụ tất cả những yếu tố của một sân
                        links đúng nghĩa với tiêu chuẩn quốc tế.
                      </p>
                      <p>
                        - Thưởng thức hải sản tại biển <strong>Mũi Né</strong>.
                      </p>
                      <p>
                        - <strong>Đồi Cát Bay</strong> tại đây đoàn có thể tham gia trò chơi cảm giác mạnh trên đồi cát
                        bằng cách đi máng trượt.
                      </p>
                    </div>
                  </div>

                  <div className="tourtet-schedule">
                    <h2 id="1">Chương trình tour</h2>
                    <div className="tourtet-firstday">
                      <h3>ĐIỂM ĐÓN:</h3>
                      <p>- 5h00 sáng: Nhà Văn Hóa Thanh Niên (4 Phạm Ngọc Thạch, Quận 1).</p>
                      <p>- 5h15 sáng: Ngã 4 Hàng Xanh.</p>
                      <p>- 5h30 sáng: Ngã 4 Thủ Đức.</p>
                      <h3>NGÀY 01: TP.HCM - PHAN THIẾT – SEA LINKS CITY (ĂN SÁNG, TRƯA, TỐI)</h3>
                      <p>
                        Sáng: Xe và Hướng dẫn viên đón quý khách tại điểm hẹn. Chào mừng các thành viên của đoàn đã tham
                        gia tour, cùng lời chúc tết đầu xuân. Đến với địa phận tỉnh Đồng Nai, quý khách dừng chân dùng
                        điểm tâm.
                      </p>
                      <p>
                        Đoàn dọc theo quốc lộ 1A, HDV sẽ cùng Quý khách tìm hiểu đôi nét về văn hóa của từng vùng miền,
                        địa phương của đất nước.
                      </p>
                      <p>
                        10h00: Đến với <b>Bình Thuận</b>, Quý khách di chuyển bằng xe điện tham quan:
                      </p>
                      <p>
                        -<b> Sea Links City</b>: là khu phức hợp nghỉ dưỡng sang trọng với tổng thể kiến trúc sang
                        trọng, hòa quyện với thiên nhiên thơ mộng. Sea Links City sở hữu vị trí lý tưởng với thiết kế
                        mở, sang trọng, tọa lạc trên ngọn đồi cao với mênh mông gợn sóng cỏ xanh và là nơi duy nhất có
                        tầm nhìn bao quát vịnh Mũi Né.
                      </p>
                      <img src={hinh2} alt="Sealink City." />
                      <p>
                        -<b> Sea Links Golf & Country Club</b>: là nơi hội tụ tất cả những yếu tố của một sân links đúng
                        nghĩa với tiêu chuẩn quốc tế. Có chiều cao 60m so với mực nước biển, Sea Links là sân golf thử
                        thách nhất châu Á với 18 lỗ golf đều nhìn ra hướng biển cùng nét đẹp tự nhiên của đồi cát với
                        đường cong uốn lượn, gồ ghề và bao bọc bởi những hố cát thử thách. Quý khách sẽ được hướng dẫn
                        và trải nghiệm đánh golf tại đây.
                      </p>
                      <img src={hinh3} alt="Sea Links Golf & Country Club." />
                      <p>
                        Trưa: Đoàn dùng bữa trưa tại nhà hàng. Xe đưa Quý khách tiếp tục lộ trình đến thiên đường resort
                        <b>Mũi Né</b>. Đoàn nhận phòng nghỉ ngơi.
                      </p>
                      <p>Chiều: Quý khách tự do tắm biển, hồ bơi tại resort.</p>
                      <p>Tối: Đoàn dùng bữa tối với các món đặc sản hấp dẫn tại nhà hàng.</p>
                      <p>
                        Với vị trí gần Tp.HCM, các chương trình tour đi Biển Mũi Né đa phần là tour nghỉ dưỡng. Thưởng
                        thức hải sản tươi sống. Nơi đây đâu đâu cũng là nhà hàng, quán hải sản phục vụ du khách như: khu
                        vực hải sản giá rẽ bình dân tại Hòn Rơm, Bờ kè Mũi Né hoặc Bờ kè Hàm Tiến...
                      </p>
                      <p>
                        Hoặc quý khách có thể thay đổi không khí bằng cách tham gia chương trình xem
                        <b>Nhạc Nước- Fishermen Show Đặc Sắc</b>, mới lạ, hấp dẫn (chi phí tham khảo 200,000/vé).
                      </p>
                      <img src={hinh4} alt="Nhạc Nước- Fishermen Show Đặc Sắc." />
                    </div>
                    <div className="tourtet-secondday">
                      <h3>NGÀY 02: PHAN THIẾT – MŨI NÉ – TPHCM (ĂN SÁNG, TRƯA)</h3>
                      <p>
                        Sáng: Quý khách dậy sớm, khởi hành đến <b>Đồi Cát Bay</b>, tại đây đoàn có thể tham gia trò chơi
                        cảm giác mạnh trên đồi cát bằng cách đi máng trượt, và thưởng thức <b>Dừa Ba Nhát</b> - đặc sản
                        địa phương và ngắm nhìn cảnh <b>Làng Chài</b> nhộn nhịp tấp nập ghe, thuyền đánh bắt cá cập bờ.
                      </p>
                      <img src={hinh5} alt="Đồi Cát Bay." />
                      <p>
                        07h00: Về lại resort. Quý khách dùng điểm tâm sáng Buffet, nghỉ ngơi tắm biển tự do. Quý khách
                        có thể thư giản tại:
                      </p>
                      <p>
                        - <b>Trung Tâm Bùn Khoáng Mũi Né</b> : Quý khách trải nghiệm tắm bùn và ngâm khoáng nóng trong
                        bồn hương hoa và massage bằng thác nước Jaccuzi tạo nên cảm giác vô cùng thoải mái và thích thú
                        khi Quý khách sử dụng dịch vụ tắm bùn (chi phí tự túc: 200.000 – 800.000đ/khách).
                      </p>
                      <img src={hinh6} alt="Trung Tâm Bùn Khoáng Mũi Né." />
                      <p>
                        Trưa: Quý khách làm thủ tục trả phòng, khởi hành dùng bữa trưa tại nhà hàng. Đoàn khởi hành về
                        lại TP.HCM, trên đường về Quý khách dừng chân mua sắm đặc sản địa phương làm quà tặng cho người
                        thân.
                      </p>
                      <p>Chiều: Về đến TP.HCM, chia tay và hẹn gặp lại Quý khách.</p>
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
                          <span>T7, 06/03/2021</span>
                          <span>CN, 07/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay0403 ? (
                              <>
                                2.186.000 VND
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
                                <span>800.000 VND</span>
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
                          <span>T7, 13/03/2021</span>
                          <span>CN, 14/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay1103 ? (
                              <>
                                2.186.000 VND
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
                          <span>T7, 20/03/2021</span>
                          <span>CN, 21/03/2021</span>
                          <span>Liên hệ</span>
                          <span>
                            {showTableDay1803 ? (
                              <>
                                2.186.000 VND
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
                                <span>800.000 VND</span>
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
                        <p>- Phụ thu phòng đơn: 800.000 vnđ/khách/tour.</p>
                        <p>
                          - Dưới 05 tuổi: Miễn phí (chi phí phát sinh trên tour gia đình tự chi trả). Hai người lớn chỉ
                          được kèm theo 01 trẻ, từ trẻ thứ hai tính 50% giá tour.
                        </p>
                        <p>
                          - Từ 05 – dưới 11 tuổi: 50% giá tour người lớn, ngủ ghép với gia đình. Hai người lớn chỉ được
                          kèm theo 01 trẻ, từ trẻ thứ hai tính giá như người lớn.
                        </p>
                        <p>- Trẻ em từ 11 tuổi trở lên mua vé như người lớn</p>
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
                              <p>- Xe du lịch 29, 35, 45ch đời mới máy lạnh, ghế bật tham quan.</p>
                            </div>
                            <div>
                              <u>Lưu trú:</u>
                              <p>- Resort 4 sao: Tiêu chuẩn 2, 3 khách/ phòng. Tiện nghi: máy lạnh, tivi, vệ sinh...</p>
                            </div>
                            <div>
                              <u>Khác:</u>
                              <p>
                                - Ăn uống: 02 bữa Ăn sáng: Tô + ly và buffet tại Resort, 03 bữa trưa + tối: nhà hàng địa
                                phương tiêu chuẩn, hợp vệ sinh.
                              </p>
                              <p>- Đoàn có HDV tiếng Việt thuyết minh và phục vụ Đoàn tham quan suốt tuyến.</p>
                              <p>- Tham quan: bao gồm phí vào cổng tại các điểm tham quan theo chương trình.</p>
                              <p>- Quà tặng: Khăn ướt và nước đóng chai.</p>
                              <p>- Bảo hiểm theo quy định của Bảo hiểm du lịch 100.000.000vnđ/vụ.</p>
                            </div>
                          </div>
                        )}
                        {secondTerm && (
                          <div className="tourtet-secondterm-list">
                            <p>- Tiền TIP cho HDV + Tài xế.</p>
                            <p>- Thuế VAT, Chi phí cá nhân ngoài chương trình: giặt ủi, điện thoại, minibar...</p>
                            <p>- Chi phí tắm bùn khoáng, chi phí xem nhạc nước.</p>
                            <p>- Chi phí chênh lệch vé tham quan theo chiều cao của trẻ em tại các khu du lịch.</p>
                          </div>
                        )}
                        {thirdTerm && (
                          <div className="tourtet-thirdterm-list">
                            <b>Chính sách hủy:</b>
                            <p>Nếu hủy tour, Quý khách thanh toán các khoản lệ phí hủy tour sau:</p>
                            <p>- Hủy tour sau khi đăng kí: 30% giá tour.</p>
                            <p>- Trước ngày đi 20 Ngày: 50% giá tour.</p>
                            <p>- Trước ngày đi 10-19 ngày: 75% giá tour.</p>
                            <p>- Trước ngày đi 0-10 Ngày: 100% giá tour.</p>
                            <p>Ngày Lễ tết hoàn hủy mất phí 100%.</p>
                          </div>
                        )}
                        {fourthTerm && (
                          <div className="tourtet-fourthterm-list">
                            <p>- Quy định của Resort/ khách sạn: giờ nhận phòng: 14h00 – 15h00. Giờ trả phòng 12h00.</p>
                            <p>
                              - Trong trường hợp khách hàng dẫn theo trẻ em dưới 15 tuổi (không phải con ruột) đi cùng
                              trong chương trình, phải mang theo Giấy Ủy Quyền của cha mẹ, có xác nhận của chính quyền
                              địa phương.
                            </p>
                            <p>- Trẻ em phải đi cùng cha mẹ khi đi phải mang theo giấy khai sinh hoặc hộ chiếu.</p>
                            <p>
                              - Du khách có mặt tại điểm đón trước 30 phút. Du khách đến trễ khi xe đã khởi hành hoặc
                              hủy tour không báo trước vui lòng chịu phí như ‘hủy vé ngay ngày khởi hành’.
                            </p>
                            <p>
                              - Du khách mang theo giấy CMND hoặc Hộ chiếu (Bản chính), nên mang theo hành lý gọn nhẹ,
                              không mang vali lớn.
                            </p>
                            <p>- Du khách tự quản lý tiền bạc tư trang trong qua trình tham quan du lịch.</p>
                            <p>- Khi đăng ký, quý khách vui lòng cung cấp đầy đủ Họ tên và năm sinh.</p>
                            <p>
                              - Đối với du khách là Việt kiều, Quốc tế nhập cảnh Việt Nam bằng visa rời, vui lòng mang
                              theo tờ khai hải quan và visa khi đi tour.
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
                      <span>800.000 VND</span>
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

export default PTGolf;
